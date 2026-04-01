import env from "@/config";
import defaultMetadata from "@/constants/default-metadata";
import type { SEOProps } from "astro-seo";
import { getLocaleFromUrl } from "./i18n";

export const createMetadata = (
  seo: SEOProps & { pathname: string; imageUrl?: string; imageAlt?: string },
): SEOProps => {
  const canonical = new URL(seo.pathname, env.SITE_BASE_URL).toString();
  const locale = getLocaleFromUrl(seo.pathname);
  const image = {
    url: seo.imageUrl || `${env.SITE_BASE_URL}/quantus-banner.png`,
    secureUrl: seo.imageUrl || `${env.SITE_BASE_URL}/quantus-banner.png`,
    alt:
      seo.imageAlt ||
      "Banner with gradient text reading 'Quantum Secure Your Crypto' in pink, purple, and yellow tones on a dark background with abstract circular shapes.",
    width: 6000,
    height: 3140,
    type: "image/png",
  };

  const title = (seo.title || defaultMetadata.title) as string;
  const description = (seo.description ||
    defaultMetadata.description) as string;

  return {
    ...defaultMetadata,
    ...seo,
    title,
    description,
    openGraph: {
      basic: {
        image: image.url,
        title,
        type: "website",
        url: canonical,
      },
      image,
      optional: {
        siteName: env.SITE_NAME,
        description,
        locale,
      },
    },
    twitter: {
      title,
      description,
      image: image.url,
      imageAlt: image.alt,
      site: "@QuantusNetwork",
      creator: "@QuantusNetwork",
      card: "summary_large_image",
    },
    canonical,
  };
};
