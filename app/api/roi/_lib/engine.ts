import { NEW_MEMBER_FACTOR, W } from "./constants";

export type NumericBindings = { a:number; b:number; g:number; PlanFee:number; L:number; n:number; d:number };

export function computeEngine(v: NumericBindings) {
  const a = v.a;
  const b = v.b;
  const g = v.g / 100;
  const L = v.L / 100;
  const d = v.d / 100;
  const PlanFee = v.PlanFee;
  const n = v.n;

  const Baseline = a * b * W;
  const LoyaltyRevenueLift = Baseline * L;
  const LoyaltyDiscountCost = LoyaltyRevenueLift * d;
  const LoyaltyGP = (LoyaltyRevenueLift - LoyaltyDiscountCost) * g;

  const NewMembersMonthly = n * W * NEW_MEMBER_FACTOR;
  const CohortRevenueLiftPerMonth = NewMembersMonthly * a * L;
  const CohortGP = CohortRevenueLiftPerMonth * g;

  const CombinedNet_M1 = LoyaltyGP + CohortGP - PlanFee;

  const ProfitSeries: number[] = [];
  const CumulativeSeries: number[] = [];
  let cum = 0;
  for (let m = 1; m <= 12; m++) {
    const pm = CombinedNet_M1 + (m - 1) * CohortGP;
    ProfitSeries.push(pm);
    cum += pm;
    CumulativeSeries.push(cum);
  }

  const i = (x: number) => Math.round(x);

  return {
    Dbg_EngineFingerprint: "SM-204-Strict",
    RenderReady: true,
    EngineVersion: "v2.0.4 SafeMath-Lock • api",

    a, b, g: Math.round(g * 100), PlanFee: Math.round(PlanFee), L: Math.round(L * 100), n, d: Math.round(d * 100), W,

    Baseline: i(Baseline),
    LoyaltyGP: i(LoyaltyGP),
    CohortGP: i(CohortGP),
    CombinedNet_M1: i(CombinedNet_M1),

    MonthTable: Array.from({ length: 12 }, (_, k) => ({
      month: k + 1,
      profit: i(ProfitSeries[k]),
      cumulative: i(CumulativeSeries[k]),
    })),

    Cumulative3: i(CumulativeSeries[2]),
    Cumulative6: i(CumulativeSeries[5]),
    Cumulative12: i(CumulativeSeries[11]),
  };
}
