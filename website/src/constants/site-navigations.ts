interface Navigation {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  /** GA4 event name when this link is clicked */
  track?: string;
  trackParams?: Record<string, string>;
}

export const SITE_NAVIGATIONS: Navigation[] = [
  { href: "/technology/", label: "navbar.technology" },
  { href: "/wallet/", label: "navbar.wallet" },
  { href: "/blog/", label: "footer.links.blog" },
  { href: "/community/", label: "navbar.community" },
  {
    href: "https://docs.quantus.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    label: "navbar.docs",
    track: "docs_click",
    trackParams: { cta_location: "nav" },
  },
  {
    href: "/quantum-risk-checker/",
    label: "navbar.quantum_risk_checker",
  },
] as const;
