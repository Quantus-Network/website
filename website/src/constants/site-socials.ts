export type SiteSocial =
  | "x"
  | "youtube"
  | "telegram"
  | "github"
  | "instagram"
  | "linktree";

export const SITE_SOCIALS = {
  x: "https://x.com/QuantusNetwork",
  youtube: "https://www.youtube.com/@quantus.network",
  telegram: "https://t.me/quantusnetwork",
  github: "https://github.com/Quantus-Network",
  instagram: "https://instagram.com/deepsteep01",
  linktree: "https://linktr.ee/quantusnetwork",
} as const;
