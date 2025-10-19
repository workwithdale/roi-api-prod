import { NextResponse } from "next/server";
import * as AllQuestions from "../_lib/questions";
import { CONTROLLER_VERSION, SAFE_EXEC_TOKEN, REQUIRED_KBS } from "../_lib/constants";
import crypto from "crypto";

// ✅ Ensure Node runtime for crypto support
export const runtime = "nodejs";

// 🧠 TypeScript-safe auto-detect for latest question version
const QUESTIONS: any =
  (AllQuestions as any).QUESTIONS_V231 ||
  (AllQuestions as any).QUESTIONS_V240 ||
  (AllQuestions as any).QUESTIONS ||
  Object.values(AllQuestions).find((q: any) => Array.isArray(q)) ||
  [];

export async function POST() {
  const sessionToken = crypto.randomUUID();
  const present = [...REQUIRED_KBS];

  return NextResponse.json({
    controllerVersion: CONTROLLER_VERSION,
    safeExecToken: SAFE_EXEC_TOKEN,
    sessionToken,
    presentKBs: present,
    questions: QUESTIONS,
  });
}
