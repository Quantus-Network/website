export type SiteSocial =
  | "x"
  | "youtube"
  | "telegram"
  | "github"
  | "instagram"
  | "linktree"
  | "coingecko";

export const SITE_SOCIALS = {
  x: "https://x.com/QuantusNetwork",
  youtube: "https://www.youtube.com/@QuantusNetwork",
  telegram: "https://t.me/quantusnetwork",
  github: "https://github.com/Quantus-Network",
  instagram: "https://www.instagram.com/quantusnetwork/",
  linktree: "https://tr.ee/wFDhS5",
  coingecko: "https://www.coingecko.com/en/coins/quantus",
} as const;
