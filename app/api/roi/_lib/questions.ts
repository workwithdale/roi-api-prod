export const QUESTIONS = [
  {
    idx: 1,
    title: "Average Check Size (per Guest)",
    why: "Your average check is the foundation of the ROI model — every lift multiplies across it.",
    prompt: "What is your restaurant’s typical check size per customer (including food and beverages)?",
    tip: "Most casual restaurants range between $25–$50 per guest. If your menu includes alcohol or premium items, lean toward the higher range.",
    optionsHeader: "**Options (reply 1–10):**",
    options: [
      "1) $10 — Quick serve / coffee bar",
      "2) $15 — Light fare / snacks",
      "3) $20 — Fast casual",
      "4) $25 — Entry casual dining",
      "5) $30 — Typical casual dining",
      "6) $35 — Casual dining (most common)",
      "7) $40 — Mid-casual",
      "8) $50 — Upscale casual",
      "9) $60 — Higher casual / bistro",
      "10) $75 — Premium / fine dining"
    ],
    var: "a",
    range: [1,10]
  },
  {
    idx: 2,
    title: "Average Weekly Guest Volume [WEEKLY_LOCKED]",
    why: "This represents the number of individual guests you serve each week. It defines your baseline scale and determines how revenue lift compounds over time.",
    prompt: "On average, how many guests (unique customers) visit your restaurant **per week**?",
    tip: "Include dine-in, takeout, and delivery customers. For multi-location brands, estimate per location.",
    optionsHeader: "**Options (reply 1–10):**",
    options: [
      "1) 100 — Small café or boutique",
      "2) 200 — Light traffic",
      "3) 300 — Typical single-unit restaurant",
      "4) 400 — Busy casual dining",
      "5) 500 — Moderate volume",
      "6) 750 — Strong foot traffic",
      "7) 1,000 — Popular location",
      "8) 2,000 — Very high traffic",
      "9) 3,000 — Multi-unit operator",
      "10) 5,000 — Large venue / major brand"
    ],
    var: "b",
    range: [1,10]
  },
  {
    idx: 3,
    title: "Gross Margin (%)",
    why: "Margin amplifies the impact of loyalty lift — higher margins convert revenue into profit more efficiently.",
    prompt: "What is your average gross margin (food + beverage)?",
    tip: null,
    optionsHeader: "**Options (reply 1–7):**",
    options: [
      "1) 45% — Low margin / pizza / QSR",
      "2) 50% — Baseline casual",
      "3) 55% — Lean casual",
      "4) 60% — Typical casual",
      "5) 65% — Higher casual / efficient ops",
      "6) 70% — Very lean or high-end",
      "7) 75% — Exceptional control"
    ],
    var: "g",
    range: [1,7]
  },
  {
    idx: 4,
    title: "Loyalty or CRM Plan Fee (Monthly)",
    why: "This represents your estimated cost for the loyalty or reactivation platform. It’s automatically deducted from your net ROI, so accuracy here makes your projection realistic.",
    prompt: "Which plan tier or equivalent do you use (or plan to use) for your loyalty program?",
    tip: null,
    optionsHeader: "**Options (reply 1–4):**",
    options: [
      "1) $599 / month — Starter (includes ~1,400 SMS; ideal for single locations)",
      "2) $999 / month — Growth (includes ~2,800 SMS; for higher guest counts)",
      "3) $1,599 / month — Pro (includes ~4,300 SMS; optimized for steady growth)",
      "4) $2,199 / month — Enterprise (includes ~5,700 SMS; best for large operators)"
    ],
    var: "PlanFee",
    range: [1,4]
  },
  {
    idx: 5,
    title: "Blended Revenue Lift (%)",
    why: "Represents the combined impact of increased visit frequency and higher check sizes among loyalty members.",
    prompt: "Based on your experience or expectations, what overall % revenue lift feels achievable from active loyalty participation?",
    tip: null,
    optionsHeader: "**Options (reply 1–10):**",
    options: [
      "1) 5% — Conservative lift (steady but modest improvement)",
      "2) 10% — Typical baseline (standard for most casual concepts)",
      "3) 15% — Moderate growth (healthy participation)",
      "4) 20% — Strong growth (solid loyalty execution)",
      "5) 25% — High performer (well-managed guest engagement)",
      "6) 30% — Exceptional (aggressive promotion + consistent retention)"
    ],
    var: "L",
    range: [1,10]
  },
  {
    idx: 6,
    title: "Weekly New Customers (New Sign-ups)",
    why: "New members represent new opportunities for ongoing revenue — every signup adds recurring potential to future months.",
    prompt: null,
    tip: null,
    optionsHeader: "**Options (reply 1–8):**",
    options: [
      "1) 5 — Very low flow",
      "2) 10 — Low flow",
      "3) 15 — Steady",
      "4) 20 — Typical",
      "5) 25 — Healthy",
      "6) 30 — Strong",
      "7) 40 — Very strong",
      "8) 50 — Exceptional"
    ],
    var: "n",
    range: [1,8]
  },
  {
    idx: 7,
    title: "Loyalty Reward Level (Discount / Reward %)",
    why: "A well-balanced reward level keeps members engaged without over-discounting — the goal is loyalty, not giveaway.",
    prompt: "What % of loyalty sales do you reinvest into rewards or customer incentives?",
    tip: "The most profitable range is usually between 10–20%. Even modest rewards can drive frequent repeat visits.",
    optionsHeader: "**Options (reply 1–7):**",
    options: [
      "1) 5% — Very low incentive (budget-focused)",
      "2) 10% — Low incentive (steady engagement)",
      "3) 15% — Balanced baseline (healthy ROI)",
      "4) 20% — Aggressive promo (growth oriented)",
      "5) 25% — Very aggressive (rapid growth / lower margin)",
      "6) 30% — Extreme (short-term push)",
      "7) 35% — Rare / unsustainable long-term"
    ],
    var: "d",
    range: [1,7]
  }
] as const;
