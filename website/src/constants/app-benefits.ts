import type { Props as BenefitData } from "@/components/ui/AppBenefitCard.astro";

export const BENEFIT_DATA: BenefitData[] = [
  {
    title: "app.benefits.reversible_transactions.title",
    content: "app.benefits.reversible_transactions.description",
  },
  {
    title: "app.benefits.readable_checkphrases.title",
    content: "app.benefits.readable_checkphrases.description",
  },
  {
    title: "app.benefits.security_guardians.title",
    content: "app.benefits.security_guardians.description",
  },
  {
    title: "app.benefits.beneficiary_recovery.title",
    content: "app.benefits.beneficiary_recovery.description",
  },
] as const;
