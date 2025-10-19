import { NextResponse } from "next/server";
import * as AllQuestions from "../_lib/questions";
import { CONTROLLER_VERSION, SAFE_EXEC_TOKEN, REQUIRED_KBS } from "../_lib/constants";
import crypto from "crypto"; // ✅ ensures Vercel recognizes the global

// ✅ Define Next.js runtime (prevents "crypto not defined" errors in edge)
export const runtime = "nodejs";

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
