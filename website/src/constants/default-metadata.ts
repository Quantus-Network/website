import type { SEOProps } from "astro-seo";

const SITE_NAME = "Quantus Network";
const SITE_BASE_URL = "https://www.quantus.com";
const title = {
  template: `%s | ${SITE_NAME}`,
  default: "Quantus Network - Quantum-Secure Layer 1 Blockchain",
};
const description =
  "A quantum-secure, open-source Layer 1 blockchain built with post-quantum cryptography and zk-proof scalability to future-proof your digital assets.";
const image = {
  url: `${SITE_BASE_URL}/banner-small.jpeg`,
  secureUrl: `${SITE_BASE_URL}/banner-small.jpeg`,
  alt: title.default,
  width: 600,
  height: 200,
  type: "image/jpeg",
};

const defaultMetadata: SEOProps = {
  title: title.default,
  description,
  canonical: SITE_BASE_URL,
  titleDefault: title.default,
  titleTemplate: title.template,
  openGraph: {
    basic: {
      image: image.url,
      title: title.default,
      type: "website",
      url: SITE_BASE_URL,
    },
    image,
    optional: {
      siteName: SITE_NAME,
      description,
      locale: "en_US",
    },
  },
  twitter: {
    title: title.default,
    description,
    image: image.url,
    imageAlt: image.alt,
    site: SITE_BASE_URL,
    creator: "Quantus Labs",
    card: "summary_large_image",
  },
};

export default defaultMetadata;
