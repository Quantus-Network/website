import env from "@/config";
import type { MobileApplication, Organization } from "schema-dts";
import defaultMetadata from "./default-metadata";
import { APP_LINKS } from "./app-links";

export const organizationJsonLd: Organization = {
  "@id": env.SITE_BASE_URL,
  "@type": "Organization",
  name: "Quantus Labs LLC",
  description:
    "Quantus Labs LLC is a technology company based in Wyoming, USA, focused on building infrastructure for decentralized, censorship-resistant technologies. Our flagship project, Quantus Network is a Layer 1 blockchain designed to be simple, open-source, and community-owned from day one.",
  url: env.SITE_BASE_URL,
  logo: {
    "@type": "ImageObject",
    caption: defaultMetadata.openGraph?.image?.alt ?? "",
    contentUrl: defaultMetadata.openGraph?.image?.url as string,
  },
  email: "hello@quantus.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St #52155",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@quantus.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/quantus-network",
    "https://x.com/QuantusNetwork",
    "https://www.instagram.com/quantusnetwork",
    "https://www.youtube.com/@Quantus.Network",
    "https://github.com/Quantus-Network",
  ],
};

export const iosAppJsonLd: MobileApplication = {
  "@id": `${env.SITE_BASE_URL}/app#ios`,
  "@type": "MobileApplication",
  name: "Quantus",
  description:
    "The post-quantum secure crypto wallet for the Quantus Network. Enjoy instant, reversible transactions and HD multi-account management.",
  operatingSystem: "iOS",
  applicationCategory: "FinanceApplication",
  installUrl: APP_LINKS.ios,
  publisher: organizationJsonLd,
};

export const androidAppJsonLd: MobileApplication = {
  "@id": `${env.SITE_BASE_URL}/app#android`,
  "@type": "MobileApplication",
  name: "Quantus",
  description:
    "The post-quantum secure crypto wallet for the Quantus Network. Enjoy instant, reversible transactions and HD multi-account management.",
  operatingSystem: "Android",
  applicationCategory: "FinanceApplication",
  installUrl: APP_LINKS.android,
  publisher: organizationJsonLd,
};
