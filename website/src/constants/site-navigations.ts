interface Navigation {
  href: string;
  label: string;
  target?: string;
  rel?: string;
}

export const SITE_NAVIGATIONS: Navigation[] = [
  { href: "/technology/", label: "navbar.technology" },
  { href: "/wallet/", label: "navbar.wallet" },
  { href: "/about/", label: "navbar.about" },
  { href: "/community/", label: "navbar.community" },
  {
    href: "https://docs.quantus.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    label: "navbar.docs",
  },
  {
    href: "/quantum-risk-checker/",
    label: "navbar.quantum_risk_checker",
  },
] as const;
