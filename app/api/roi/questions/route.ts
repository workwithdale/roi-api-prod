import { NextResponse } from "next/server";
import * as AllQuestions from "../_lib/questions";
import { CONTROLLER_VERSION, SAFE_EXEC_TOKEN, REQUIRED_KBS } from "../_lib/constants";

// 🔍 Auto-detect latest available QUESTIONS_* export (future-proofed)
const QUESTIONS =
  AllQuestions.QUESTIONS_V231 ||
  AllQuestions.QUESTIONS_V240 ||
  AllQuestions.QUESTIONS ||
  Object.values(AllQuestions).find((q: any) => Array.isArray(q)) ||
  [];

export async function POST() {
  const sessionToken = crypto.randomUUID();
  const present = [...REQUIRED_KBS]; // simulated presence / KB verification

  return NextResponse.json({
    controllerVersion: CONTROLLER_VERSION,
    safeExecToken: SAFE_EXEC_TOKEN,
    sessionToken,
    presentKBs: present,
    questions: QUESTIONS,
  });
}
