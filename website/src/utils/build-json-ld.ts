import type { BreadcrumbList, Graph, Thing, WithContext } from "schema-dts";
import { removeLocaleFromUrl } from "@/utils/i18n";

export function JsonLd<T extends Thing>(json: WithContext<T>) {
  return json;
}

export function JsonLdGraph(json: Graph) {
  return json;
}

export function generateBreadcrumbs({
  pathname,
  locale,
  siteBaseUrl,
  t,
  navigations,
  title,
}: {
  pathname: string;
  locale: string;
  siteBaseUrl: string;
  t: (key: string) => string;
  navigations: any[];
  title?: string;
}): WithContext<BreadcrumbList> {
  const cleanPath = removeLocaleFromUrl(pathname);
  // Split path into segments, ignoring empty strings
  const segments = cleanPath.split("/").filter(Boolean);

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: t("navbar.home") || "Home",
      item: siteBaseUrl + (locale === "en-US" ? "/" : `/${locale}/`),
    },
  ];

  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Find name from navigations
    // Check both exact match and match with trailing slash
    const navItem = navigations.find(
      (n) => n.href === currentPath || n.href === `${currentPath}/`
    );

    let name = navItem ? t(navItem.label) : segment;

    // Fallback formatting for segments if no nav item found
    if (!navItem) {
      if (isLast && title) {
        name = title;
      } else {
        // "my-blog-post" -> "My Blog Post"
        name = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());
      }
    }

    // Construct full URL
    // Ensure we don't double slashes or miss them
    const localePrefix = locale === "en-US" ? "" : `/${locale}`;
    const url = `${siteBaseUrl}${localePrefix}${currentPath}`;

    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: name,
      item: url,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
