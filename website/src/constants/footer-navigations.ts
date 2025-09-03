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
    label: "Resources",
    children: [
      {
        href: "https://t.me/quantusnetwork",
        label: "Community",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      // { href: "/tutorials", label: "Tutorials" },
      {
        href: "https://github.com/Quantus-Network/chain",
        label: "Documentation",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        href: "https://t.me/quantustechsupport",
        label: "Tech Support",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    label: "Info",
    children: [
      { href: "/about", label: "Company" },
      // { href: "/audits", label: "Audits" },
      {
        href: "/terms-and-privacy",
        label: "Terms & Conditions",
      },
      { href: "/terms-and-privacy#privacy", label: "Privacy Policy" },
    ],
  },
] as const;
