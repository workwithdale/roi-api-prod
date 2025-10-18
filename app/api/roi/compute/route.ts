import { NextResponse } from "next/server";
import {
  OPTION_MAP,
  RANGE_GUARDS,
  CONTROLLER_VERSION,
  CONTROLLER_PERMIT,
  ENGINE_FINGERPRINT,
  SAFE_EXEC_TOKEN,
  REQUIRED_KBS,
} from "../_lib/constants";
import { computeEngine } from "../_lib/engine";
import { renderMarkdown } from "../_lib/template";
import { runSmokeTest } from "../_lib/smoke";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  const { selections, sessionToken, safeExecToken } = body as {
    selections: Partial<Record<keyof typeof OPTION_MAP, number>>;
    sessionToken?: string;
    safeExecToken?: string;
  };

  if (!sessionToken) return NextResponse.json({ error: "Missing sessionToken" }, { status: 400 });
  if (safeExecToken !== SAFE_EXEC_TOKEN)
    return NextResponse.json({ error: "SafeExecToken invalid" }, { status: 403 });

  const requiredVars: (keyof typeof OPTION_MAP)[] = [
    "a",
    "b",
    "g",
    "PlanFee",
    "L",
    "n",
    "d",
  ];
  for (const v of requiredVars) {
    const sel = selections?.[v];
    const [lo, hi] = RANGE_GUARDS[v];
    if (typeof sel !== "number" || sel < lo || sel > hi) {
      return NextResponse.json(
        { error: `Invalid option for ${v}. Expected ${lo}–${hi}.` },
        { status: 400 }
      );
    }
  }

  // ---- TS-safe mapping (fix for numeric literal indexing on strict builds) ----
  const pick = (map: Record<number, number>, key: number) => {
    const v = map[key];
    if (typeof v !== "number") throw new Error("Invalid option mapping");
    return v;
  };

  const mapA = OPTION_MAP.a as unknown as Record<number, number>;
  const mapB = OPTION_MAP.b as unknown as Record<number, number>;
  const mapG = OPTION_MAP.g as unknown as Record<number, number>;
  const mapPlan = OPTION_MAP.PlanFee as unknown as Record<number, number>;
  const mapL = OPTION_MAP.L as unknown as Record<number, number>;
  const mapN = OPTION_MAP.n as unknown as Record<number, number>;
  const mapD = OPTION_MAP.d as unknown as Record<number, number>;

  const bound = {
    a: pick(mapA, selections!.a!),
    b: pick(mapB, selections!.b!),
    g: pick(mapG, selections!.g!),
    PlanFee: pick(mapPlan, selections!.PlanFee!),
    L: pick(mapL, selections!.L!),
    n: pick(mapN, selections!.n!),
    d: pick(mapD, selections!.d!),
  } as const;

  const rv = computeEngine(bound as any);
  (rv as any).ControllerPermit = CONTROLLER_PERMIT;
  (rv as any).Dbg_EngineFingerprint = ENGINE_FINGERPRINT;

  const sessionVars = {
    SafeExecToken: SAFE_EXEC_TOKEN,
    ControllerVersion: CONTROLLER_VERSION,
  };
  const present = [...REQUIRED_KBS];
  const smoke = runSmokeTest(present, sessionVars, rv);
  if (!smoke.ok)
    return NextResponse.json(
      { error: "Smoke test failed", details: smoke.errors },
      { status: 500 }
    );

  const markdown = renderMarkdown(rv);

  return NextResponse.json({
    markdown: {
      snapshot: markdown
        .split("## 🗓 12-MONTH ROI PROJECTION")[0]
        .trim(),
      projection:
        "## 🗓 12-MONTH ROI PROJECTION" +
        markdown
          .split("## 🗓 12-MONTH ROI PROJECTION")[1]
          .split("## 📈 GROWTH OVER TIME")[0],
      growth:
        "## 📈 GROWTH OVER TIME" +
        markdown.split("## 📈 GROWTH OVER TIME")[1],
    },
    numbers: {
      baseline: (rv as any).Baseline,
      loyaltyGP: (rv as any).LoyaltyGP,
      cohortGP: (rv as any).CohortGP,
      combinedNetM1: (rv as any).CombinedNet_M1,
      monthTable: (rv as any).MonthTable,
      cumulative: {
        m3: (rv as any).Cumulative3,
        m6: (rv as any).Cumulative6,
        m12: (rv as any).Cumulative12,
      },
    },
    provenance: {
      controllerVersion: CONTROLLER_VERSION,
      engineFingerprint: ENGINE_FINGERPRINT,
      controllerPermit: CONTROLLER_PERMIT,
      safeExecToken: SAFE_EXEC_TOKEN,
    },
  });
}
