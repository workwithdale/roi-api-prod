export function renderMarkdown(rv: any) {
  const c = (n:number)=>`$${n.toLocaleString()}`;
  const line = (s:string)=>s+"\n";
  let md = "";

  md += line("## 📊 MONTHLY SNAPSHOT");
  md += line("");
  md += line("| Metric | Value | Commentary |");
  md += line("|:--|--:|:--|");
  md += line(`| Loyalty Program Lift | ${c(rv.LoyaltyGP)} | Driven by repeat visits and higher check sizes from engaged members. |`);
  md += line(`| New Customer Growth | ${c(rv.CohortGP)} | Profit from new members who joined and returned in Month 1. |`);
  md += line(`| Program Costs | ${c(rv.PlanFee)} | Monthly subscription and SMS messaging allowance included. |`);
  md += line(`| **Combined Net Incremental Profit (Month 1)** | ${c(rv.CombinedNet_M1)} | Net monthly profit **after all program costs**. |`);
  md += line("");

  md += line("## 🗓 12-MONTH ROI PROJECTION");
  md += line("");
  md += line("_Clarity note: All profits below are incremental and already **net of program costs**._");
  md += line("");
  md += line("| Month | Monthly Profit ($) | Cumulative Profit ($) |");
  md += line("|:--:|--:|--:|");
  md += line(rv.MonthTable.map((r:any)=>`| ${r.month} | ${r.profit.toLocaleString()} | ${r.cumulative.toLocaleString()} |`).join("\n"));
  md += line("");
  md += line("## 📈 GROWTH OVER TIME");
  md += line("");
  md += line("| Milestone | Cumulative Profit |");
  md += line("|:--|--:|");
  md += line(`| 3 Months | ${c(rv.Cumulative3)} |`);
  md += line(`| 6 Months | ${c(rv.Cumulative6)} |`);
  md += line(`| 12 Months | ${c(rv.Cumulative12)} |`);
  md += line("");
  md += line("## 🔍 Quick Validation");
  md += line("");
  md += line(`a=$${rv.a}, b=${rv.b}, g=${rv.g}%, L=${rv.L}%, d=${rv.d}%, PlanFee=$${rv.PlanFee}, W=${rv.W}`);
  md += line(`Baseline=${c(rv.Baseline)} | LoyaltyGP=${c(rv.LoyaltyGP)} | CohortGP=${c(rv.CohortGP)} | CombinedNet_M1=${c(rv.CombinedNet_M1)}`);
  md += line(`Month 12 Cumulative ≈ ${c(rv.Cumulative12)}`);
  md += line("");
  md += line("_Engine: Pro Engine Integration (v2.0.4 SafeMath-Lock • api)_");
  return md;
}
