import env from "@/config";
import type {
  MobileApplication,
  Organization,
  TechArticle,
  WebSite,
} from "schema-dts";
import defaultMetadata from "./default-metadata";
import { APP_LINKS } from "./app-links";

export const websiteJsonLd: WebSite = {
  "@type": "WebSite",
  name: "Quantus",
  url: env.SITE_BASE_URL,
  image: {
    "@type": "ImageObject",
    caption: defaultMetadata.openGraph?.image?.alt ?? "",
    contentUrl: defaultMetadata.openGraph?.image?.url as string,
  },
  description: defaultMetadata.description,
  sameAs: [
    "https://www.linkedin.com/company/quantus-network",
    "https://x.com/QuantusNetwork",
    "https://www.instagram.com/quantusnetwork",
    "https://www.youtube.com/@QuantusNetwork",
    "https://github.com/Quantus-Network",
  ],
  potentialAction: {
    "@type": "SubscribeAction",
    description:
      "Subscribe to our Newsletter. Alpha Alert! Get your weekly news-blast with sneak previews, updates, news roundup, educational content and more",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${env.SITE_BASE_URL}/#footer`,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform",
      ],
    },
  },
};

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
    "https://www.youtube.com/@QuantusNetwork",
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

export const whitepaperJsonLd: TechArticle = {
  "@id": `${env.SITE_BASE_URL}/whitepaper`,
  "@type": "TechArticle",
  headline: "Quantus Network Whitepaper",
  image: "https://raw.githubusercontent.com/Quantus-Network/whitepaper/main/whitepaper-cover.png",
  description:
    "The official whitepaper for Quantus Network, detailing the versioned history, protocol, and architecture of the network.",
  author: {
    "@type": "Organization",
    name: "Quantus Network",
    url: "https://github.com/Quantus-Network",
  },
  publisher: {
    "@type": "Organization",
    name: "Quantus Network",
    logo: {
      "@type": "ImageObject",
      url: "https://github.com/Quantus-Network.png",
    },
  },
  inLanguage: "en-US",
  encoding: {
    "@type": "MediaObject",
    contentUrl:
      "https://raw.githubusercontent.com/Quantus-Network/whitepaper/main/whitepaper.pdf",
    encodingFormat: "application/pdf",
  },
  about: {
    "@type": "Thing",
    name: "Blockchain Protocol",
    description: "Technical specification of the Quantus Network protocol.",
  },
};

export const getWhitepaperJsonLd = (locale: string): TechArticle => {
  const url =
    locale === "en-US"
      ? `${env.SITE_BASE_URL}/whitepaper`
      : `${env.SITE_BASE_URL}/${locale}/whitepaper`;

  return {
    ...whitepaperJsonLd,
    "@id": url,
    inLanguage: locale,
    encoding: {
      "@type": "MediaObject",
      contentUrl: `https://raw.githubusercontent.com/Quantus-Network/whitepaper/main/${locale}/whitepaper.pdf`,
      encodingFormat: "application/pdf",
    },
  };
};
