interface Navigation {
  label: string;
  children: {
    href: string;
    label: string;
    target?: string;
    rel?: string;
  }[];
}

export const FOOTER_NAVIGATIONS: Navigation[] = [
  {
    label: "footer.sections.protocol",
    children: [
      {
        label: "footer.links.whitepaper",
        href: "/whitepaper",
      },
      { label: "footer.links.technology", href: "/technology" },
      {
        label: "footer.links.network",
        href: "https://explorer.quantus.com/",
        target: "_blank",
        rel: "noopener",
      },
      { label: "footer.links.wallet", href: "/wallet" },
      {
        label: "footer.links.research",
        href: "https://research.quantus.com/",
        target: "_blank",
        rel: "noopener",
      },
      {
        label: "footer.links.documentation",
        href: "https://docs.quantus.com/",
        target: "_blank",
        rel: "noopener",
      },
    ],
  },
  {
    label: "footer.sections.community",
    children: [
      {
        label: "footer.links.telegram",
        href: "https://t.me/quantusnetwork",
        target: "_blank",
        rel: "noopener",
      },
      {
        label: "footer.links.x",
        href: "https://x.com/QuantusNetwork",
        target: "_blank",
        rel: "noopener",
      },
      {
        label: "footer.links.instagram",
        href: "https://www.instagram.com/quantusnetwork/",
        target: "_blank",
        rel: "noopener",
      },
      {
        label: "footer.links.youtube",
        href: "https://www.youtube.com/@QuantusNetwork",
        target: "_blank",
        rel: "noopener",
      },
    ],
  },
  {
    label: "footer.sections.company",
    children: [
      { label: "footer.links.about", href: "/about" },
      { label: "footer.links.blog", href: "/blog" },
      { label: "footer.links.podcast", href: "/community" },
      { label: "footer.links.contact", href: "/about#contact" },
      { label: "footer.links.privacy", href: "/privacy-policy" },
      { label: "footer.links.terms", href: "/terms" },
      {
        label: "footer.links.coingecko",
        href: "https://www.coingecko.com/en/coins/quantus",
        target: "_blank",
        rel: "noopener",
      },
    ],
  },
] as const;
