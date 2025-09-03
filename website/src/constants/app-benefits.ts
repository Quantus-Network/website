import type { Props as BenefitData } from "@/components/ui/AppBenefitCard.astro";

export const BENEFIT_DATA: BenefitData[] = [
  {
    title: "Reversible Transactions",
    content:
      "Set a reversible window for every send. Made a mistake? Didn't receive the goods you were promised? Fat fingers struck again? Simply reverse the transaction before the timer's up.",
  },
  {
    title: "Readable Checkphrases",
    content:
      "No more copy-paste paranoia. Send with confidence using unique, human-friendly checkphrases you'll actually recognize. No typos, no lookalike scams, just clear, unmistakable destinations.",
  },
  {
    title: "Security Guardians",
    content:
      "You choose your trusted allies and give them the power to step in and intercept a transfer before it goes through. A safety net of your own design, protecting your assets when you can't.",
  },
  {
    title: "Beneficiary & Recovery",
    content:
      "Plan for the long term. Assign a recovery account or beneficiary to inherit your funds if you’re gone. Your assets stay protected, even during unexpected events. Think of it as your will, enforced by code.",
  },
] as const;
