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
    label: "v2.footer.sections.protocol",
    children: [
      {
        label: "v2.footer.links.whitepaper",
        href: "https://www.quantus.com/whitepaper/",
        target: "_blank",
        rel: "noopener",
      },
      { label: "v2.footer.links.technology", href: "/technology" },
      {
        label: "v2.footer.links.network",
        href: "https://explorer.quantus.com/",
        target: "_blank",
        rel: "noopener",
      },
      { label: "v2.footer.links.wallet", href: "/wallet" },
      {
        label: "v2.footer.links.research",
        href: "https://research.quantus.com/",
        target: "_blank",
        rel: "noopener",
      },
      {
        label: "v2.footer.links.documentation",
        href: "https://github.com/Quantus-Network/chain",
        target: "_blank",
        rel: "noopener",
      },
    ],
  },
  {
    label: "v2.footer.sections.community",
    children: [
      {
        label: "v2.footer.links.telegram",
        href: "https://t.me/quantusnetwork",
        target: "_blank",
        rel: "noopener",
      },
      {
        label: "v2.footer.links.x",
        href: "https://x.com/QuantusNetwork",
        target: "_blank",
        rel: "noopener",
      },
      {
        label: "v2.footer.links.instagram",
        href: "https://www.instagram.com/quantusnetwork/",
        target: "_blank",
        rel: "noopener",
      },
      {
        label: "v2.footer.links.youtube",
        href: "https://www.youtube.com/@QuantusNetwork",
        target: "_blank",
        rel: "noopener",
      },
    ],
  },
  {
    label: "v2.footer.sections.company",
    children: [
      { label: "v2.footer.links.about", href: "/about" },
      { label: "v2.footer.links.blog", href: "/blog" },
      { label: "v2.footer.links.podcast", href: "/community" },
      { label: "v2.footer.links.contact", href: "/about#contact" },
      { label: "v2.footer.links.privacy", href: "/privacy-policy" },
      { label: "v2.footer.links.terms", href: "/terms" },
    ],
  },
] as const;
