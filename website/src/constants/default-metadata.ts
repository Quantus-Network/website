import env from "@/config";
import type { SEOProps } from "astro-seo";

const title = {
  template: `%s | ${env.SITE_NAME}`,
  default: "Quantus - Quantum-Secure Encrypted Money",
};
const description =
  "Quantus is quantum-secure encrypted money on Layer 1. Download the wallet for post-quantum protected assets, private transfers, and reversible transactions.";
const image = {
  url: `${env.SITE_BASE_URL}/quantus-banner.png`,
  secureUrl: `${env.SITE_BASE_URL}/quantus-banner.png`,
  alt: "Banner with gradient text reading 'Quantum Secure Your Crypto' in pink, purple, and yellow tones on a dark background with abstract circular shapes.",
  width: 6000,
  height: 3140,
  type: "image/png",
};

const defaultMetadata: SEOProps = {
  title: title.default,
  description,
  canonical: env.SITE_BASE_URL,
  titleDefault: title.default,
  titleTemplate: title.template,
  openGraph: {
    basic: {
      image: image.url,
      title: title.default,
      type: "website",
      url: env.SITE_BASE_URL,
    },
    image,
    optional: {
      siteName: env.SITE_NAME,
      description,
      locale: "en_US",
    },
  },
  twitter: {
    title: title.default,
    description,
    image: image.url,
    imageAlt: image.alt,
    site: "@QuantusNetwork",
    creator: "@QuantusNetwork",
    card: "summary_large_image",
  },
};

export default defaultMetadata;
