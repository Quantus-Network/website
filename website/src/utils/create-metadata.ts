import env from "@/config";
import defaultMetadata from "@/constants/default-metadata";
import type { SEOProps } from "astro-seo";
import { getLocaleFromUrl } from "./i18n";

const DEFAULT_IMAGE_PATH = "/quantus-banner.png";
const DEFAULT_IMAGE_WIDTH = 6000;
const DEFAULT_IMAGE_HEIGHT = 3140;

function getImageMimeType(url: string): string {
  const pathname = url.split("?")[0]?.toLowerCase() ?? "";
  if (pathname.endsWith(".webp")) return "image/webp";
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg"))
    return "image/jpeg";
  if (pathname.endsWith(".gif")) return "image/gif";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  return "image/png";
}

export const createMetadata = (
  seo: SEOProps & { pathname: string; imageUrl?: string; imageAlt?: string },
): SEOProps => {
  const canonical = new URL(seo.pathname, env.SITE_BASE_URL).toString();
  const locale = getLocaleFromUrl(seo.pathname);

  const isDefaultImage = !seo.imageUrl;
  const rawImageUrl = seo.imageUrl || DEFAULT_IMAGE_PATH;
  const absoluteImageUrl = new URL(rawImageUrl, env.SITE_BASE_URL).toString();

  const image = {
    url: absoluteImageUrl,
    secureUrl: absoluteImageUrl,
    alt:
      seo.imageAlt || "Banner with abstract circular shapes of quantus logo.",
    type: getImageMimeType(absoluteImageUrl),
    ...(isDefaultImage
      ? { width: DEFAULT_IMAGE_WIDTH, height: DEFAULT_IMAGE_HEIGHT }
      : {}),
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
