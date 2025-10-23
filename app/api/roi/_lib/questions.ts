export const QUESTIONS_V231 = [
  {
    idx: 0,
    title: "Q1 — Average check size per guest",
    why: "Your average check size helps determine the base revenue per guest before applying loyalty or visit frequency effects.",
    prompt: `Enter your average check per guest, including food and beverages. This is the typical total before taxes or tips.

💬 *Reminder: Please reply with the **option number** (not the dollar amount). Example: enter \`7\` for "$40 — Mid-casual."*`,
    tip: "If unsure, use $25–$35 for casual dining or $40–$60 for upscale.",
    optionsHeader: "Select the closest average check size per guest:",
    options: [
      "1 — $10 (Quick serve / coffee bar)",
      "2 — $15 (Light fare / snacks)",
      "3 — $20 (Fast casual)",
      "4 — $25 (Entry casual dining)",
      "5 — $30 (Typical casual dining)",
      "6 — $35 (Casual dining — most common)",
      "7 — $40 (Mid-casual)",
      "8 — $50 (Upscale casual)",
      "9 — $60 (Higher casual / bistro)",
      "10 — $75 (Premium / fine dining)"
    ],
    var: "a",
    range: [1, 10]
  },
  {
    idx: 1,
    title: "Q2 — Average monthly guest count",
    why: "This determines your total monthly traffic volume and baseline opportunity for loyalty-driven lift.",
    prompt: `Enter the approximate number of guests you serve per month (not total tickets). This helps calculate your total loyalty reach potential.

💬 *Reminder: Reply with the **option number** that best fits your restaurant’s traffic level.*`,
    tip: "Estimate the number of unique guests, not tickets — many guests visit multiple times per month.",
    optionsHeader: "Roughly how many unique guests do you serve each month?",
    options: [
      "1 — 100 (Small café or boutique)",
      "2 — 200 (Light traffic)",
      "3 — 300 (Typical single-unit restaurant)",
      "4 — 400 (Busy casual dining)",
      "5 — 500 (Moderate volume)",
      "6 — 750 (Strong foot traffic)",
      "7 — 1,000 (Popular location)",
      "8 — 2,000 (Very high traffic)",
      "9 — 3,000 (Multi-unit operator)",
      "10 — 5,000 (Large venue / major brand)"
    ],
    var: "b",
    range: [1, 10]
  },
  {
    idx: 2,
    title: "Q3 — Typical operating margin range",
    why: "This determines your baseline profitability before factoring in loyalty-driven lift or reactivation gains.",
    prompt: `Select the range that best represents your restaurant’s operating margin — your profit after food, labor, and overhead costs. This helps estimate your net profit lift from loyalty-driven sales.

💬 *Reminder: Choose the **option number** that matches your margin range, not the % itself.*`,
    tip: "If unsure, select 55–60%. That’s typical for most casual dining operators.",
    optionsHeader: "What is your approximate operating margin before loyalty impact?",
    options: [
      "1 — 45% (Low margin / pizza / QSR)",
      "2 — 50% (Baseline casual)",
      "3 — 55% (Lean casual)",
      "4 — 60% (Typical casual)",
      "5 — 65% (Higher casual / efficient ops)",
      "6 — 70% (Very lean or high-end)",
      "7 — 75% (Exceptional control)"
    ],
    var: "g",
    range: [1, 7]
  },
  {
    idx: 3,
    title: "Q4 — Select your loyalty plan level",
    why: "This defines your estimated plan fee and SMS allowance, which influence your total ROI. It also helps model your customer database growth based on list size.",
    prompt:
      "Choose the plan that best fits your restaurant’s size and customer volume. Each plan includes a monthly SMS allowance for loyalty messages and reactivation campaigns.\n\nIf you don’t currently have a customer database, that’s perfectly fine — many restaurants don’t. That’s one of the biggest advantages of BookedTables: it builds your textable customer list automatically as guests scan your QR code and join your loyalty program.",
    tip: "If you’re not sure, start with Plan 1. It’s ideal for single-location restaurants growing their first database.",
    optionsHeader: "Which plan level most closely matches your customer list size and messaging needs?",
    options: [
      "$599 / month — Starter (includes ~1,400 SMS; ideal for up to 999 contacts)",
      "$999 / month — Growth (includes ~2,800 SMS; 1,000–1,999 contacts)",
      "$1,599 / month — Pro (includes ~4,300 SMS; 2,000–2,999 contacts)",
      "$2,199 / month — Enterprise (includes ~5,700 SMS; 3,000–4,999 contacts)"
    ],
    var: "PlanFee",
    range: [1, 4]
  },
{
  idx: 4,
  title: "Q5 — Estimate your average loyalty lift per visit",
  why: "This measures how much more loyalty members spend compared to regular guests, reflecting higher check averages and order behavior.",
  prompt:
    "Loyalty guests tend to spend more — even when redeeming a discount. They often add appetizers, drinks, or desserts, and return more frequently. Industry data shows loyalty members spend **10–15% more per visit**, with some operators seeing lifts of 20% or higher once engagement deepens.\n\n💬 **Reminder:** Choose the option number that matches your estimated loyalty lift, not the percentage itself.",
  tip: "If you’re new to loyalty, choose 10–15%. Established programs often see 15–25%+ lift.",
  optionsHeader: "How much more do loyalty members spend on average compared to regular guests?",
  options: [
    "1 — 5% (minimal lift)",
    "2 — 10% (conservative estimate)",
    "3 — 15% (balanced average)",
    "4 — 20% (typical BookedTables lift)",
    "5 — 25% (strong engagement program)",
    "6 — 30%+ (high loyalty maturity)"
  ],
  var: "L",
  range: [1, 6]
},
  {
    idx: 5,
    title: "Q6 — Estimate your expected loyalty participation rate",
    why: "This measures how many of your guests are — or will be — engaging with your loyalty program by joining, redeeming offers, or responding to messages. Even if you don’t have a program yet, this question helps estimate your potential participation rate once guests can join instantly through BookedTables.",
    prompt: `If you already have a loyalty program, think about what percentage of guests participate or return because of rewards or messages.

If you don’t have one yet, here’s what’s typical: **BookedTables users see about 9 in 10 guests (90%) opt in** when scanning a QR code for an instant 10% discount. Of those, **around 30–60% stay active** within a few months — a far higher engagement rate than old-fashioned punch cards or apps.

💬 *Reminder: Reply with the **option number** that best matches your estimated participation rate once loyalty is active.*`,
    tip: "If you’re not running loyalty yet, choose 25–35%. That’s a realistic early estimate for restaurants using BookedTables QR signups.",
    optionsHeader: "How many of your guests do you think would engage with your loyalty program once offered?",
    options: [
      "1 — Around 10% (just starting or very new program)",
      "2 — About 20% (building awareness)",
      "3 — Around 30% (early BookedTables average)",
      "4 — About 40% (strong early adoption)",
      "5 — Around 50% (steady engagement after a few months)",
      "6 — About 60% (well-established loyalty program)",
      "7 — Around 70% (top-performing restaurants with strong repeat base)",
      "8 — 80% or more (exceptional engagement — typical of multi-location or high-volume operators)"
    ],
    var: "n",
    range: [1, 8]
  },
  {
    idx: 6,
    title: "Q7 — Estimate your average loyalty reward or discount value",
    why: "This measures how much you typically give back to loyal customers through rewards, discounts, or comped items. Think of it as a smart reinvestment in repeat business — a loyalty budget that earns measurable returns, not a cost that disappears after one ad run.",
    prompt: `Traditional marketing — like print coupons, paid ads, or delivery app promos — often produces only a short-term bump in traffic. Once the promotion ends, the results fade and the cost repeats.

BookedTables takes the opposite approach: it creates **ongoing customer return cycles** that compound over time. Because each offer targets guests who already know and like your restaurant, every reward builds long-term loyalty instead of one-shot advertising spikes.

💬 *Reminder: Reply with the **option number** (not the %). Example: enter \`3\` for "Around 15% — balanced baseline, healthy ROI."*`,
    tip: "If you’re not sure, start with 10–15%. That’s the most common and sustainable range for BookedTables loyalty users.",
    optionsHeader: "On average, what value or discount do you plan to offer to loyal customers when they redeem a reward?",
    options: [
      "1 — Around 5% (very low incentive, budget-focused)",
      "2 — About 10% (steady engagement, conservative reward)",
      "3 — Around 15% (balanced baseline, healthy ROI)",
      "4 — About 20% (growth-focused promotion level)",
      "5 — Around 25% (aggressive incentive, short-term lift)",
      "6 — About 30% (very aggressive offer, limited-time campaigns)",
      "7 — 35% or higher (rare — unsustainable long-term for most restaurants)"
    ],
    var: "d",
    range: [1, 7]
  }
];

// ------------------------------------------------------------
// Compatibility alias for routers referencing generic QUESTIONS
// This ensures backward compatibility for v2.3.1 and later.
// ------------------------------------------------------------
export const QUESTIONS = QUESTIONS_V231;
