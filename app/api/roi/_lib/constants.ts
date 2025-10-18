export const REQUIRED_KBS = [
  "Pro Flow Instructions (v2.0.7 Secure+Sync+Patched).md",
  "Pro Flow Helper (v1.3).md",
  "Pro User Questions v2.2.5 (WEEKLY_LOCKED).md",
  "Pro Engine Integration (v2.0.4 SafeMath-Lock).md",
  "Pro Output Template (v2.2.4).md",
];

export const SAFE_EXEC_TOKEN = "LOCKED-ROI-V205";
export const ENGINE_FINGERPRINT = "SM-204-Strict";
export const CONTROLLER_VERSION = "v2.0.7-api";
export const CONTROLLER_PERMIT = "V2-OK";

export const W = 4.345;           // weeks per month
export const NEW_MEMBER_FACTOR = 0.9; // ~90% first-month realization

export const OPTION_MAP = {
  a: { 1:10, 2:15, 3:20, 4:25, 5:30, 6:35, 7:40, 8:50, 9:60, 10:75 },
  b: { 1:100, 2:200, 3:300, 4:400, 5:500, 6:750, 7:1000, 8:2000, 9:3000, 10:5000 },
  g: { 1:45, 2:50, 3:55, 4:60, 5:65, 6:70, 7:75 },
  PlanFee: { 1:599, 2:999, 3:1599, 4:2199 },
  L: { 1:5, 2:10, 3:15, 4:20, 5:25, 6:30 },
  n: { 1:5, 2:10, 3:15, 4:20, 5:25, 6:30, 7:40, 8:50 },
  d: { 1:5, 2:10, 3:15, 4:20, 5:25, 6:30, 7:35 },
} as const;

export const RANGE_GUARDS: Record<string, [number, number]> = {
  a: [1,10], b: [1,10], g: [1,7], PlanFee: [1,4], L: [1,10], n: [1,8], d: [1,7]
};
