export const FOOTER_NAVIGATIONS = [
  {
    label: "Resources",
    children: [
      { href: "/community", label: "Community" },
      { href: "/tutorials", label: "Tutorials" },
      { href: "/documentation", label: "Documentation" },
      { href: "/supports", label: "Tech Support" },
    ],
  },
  {
    label: "Info",
    children: [
      { href: "/about", label: "Company" },
      { href: "/audits", label: "Audits" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
] as const;
