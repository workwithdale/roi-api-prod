import { REQUIRED_KBS } from "./constants";

export function runSmokeTest(presentFiles: string[], sessionVars: any, renderVars: any) {
  const missing = REQUIRED_KBS.filter(x => !presentFiles.includes(x));
  if (missing.length) {
    return { ok:false, errors:[`Missing KB(s): ${missing.join(", ")}`] };
  }
  const errors:string[] = [];
  if (!String(sessionVars.ControllerVersion||"").startsWith("v2.0.7")) errors.push("ControllerVersion invalid or missing (expected v2.0.7+).");
  if (renderVars.ControllerPermit !== "V2-OK") errors.push("ControllerPermit missing or invalid (expected V2-OK).");
  if (renderVars.Dbg_EngineFingerprint !== "SM-204-Strict") errors.push("Engine fingerprint mismatch (expected SM-204-Strict).");
  if (renderVars.RenderReady !== true) errors.push("Engine RenderReady flag missing or False.");
  if (sessionVars.SafeExecToken !== "LOCKED-ROI-V205") errors.push("SafeExecToken missing — invalid session.");
  return { ok: errors.length===0, errors };
}
