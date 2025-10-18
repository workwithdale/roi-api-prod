import { NextResponse } from "next/server";
import { QUESTIONS } from "../_lib/questions";
import { CONTROLLER_VERSION, SAFE_EXEC_TOKEN, REQUIRED_KBS } from "../_lib/constants";

export async function POST() {
  const sessionToken = crypto.randomUUID();
  const present = [...REQUIRED_KBS]; // simulated presence

  return NextResponse.json({
    controllerVersion: CONTROLLER_VERSION,
    safeExecToken: SAFE_EXEC_TOKEN,
    sessionToken,
    presentKBs: present,
    questions: QUESTIONS
  });
}
