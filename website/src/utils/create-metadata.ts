import env from "@/config";
import defaultMetadata from "@/constants/default-metadata";
import type { SEOProps } from "astro-seo";

export const createMetadata = (seo:SEOProps & {pathname: string}): SEOProps => {
    const canonical = `${env.SITE_BASE_URL}${seo.pathname}`;
    
    return {
        ...defaultMetadata,
        ...seo,
        canonical,
    };
};