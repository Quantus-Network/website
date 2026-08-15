import type { Graph, Person, ProfilePage, TechArticle } from "schema-dts";
import env from "@/config";
import {
  PEOPLE,
  PERSON_IDS,
  getPersonByName,
  personId,
  personUrl,
  type PersonId,
} from "@/constants/people";
import { PERSON_IMAGES } from "@/constants/person-images";
import {
  getWhitepaperJsonLd,
  organizationJsonLd,
} from "@/constants/default-jsonld";

function personImageUrl(slug: PersonId): string {
  return new URL(PERSON_IMAGES[slug].src, env.SITE_BASE_URL).toString();
}

export function getPersonJsonLd(slug: PersonId): Person {
  const person = PEOPLE[slug];
  const imageUrl = personImageUrl(slug);

  const jsonLd: Person = {
    "@type": "Person",
    "@id": personId(slug),
    name: person.name,
    url: personUrl(slug),
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      contentUrl: imageUrl,
    },
    jobTitle: person.jobTitle,
    description: person.bio,
    sameAs: [...person.sameAs],
    worksFor: {
      "@id": env.SITE_BASE_URL,
    },
  };

  if (person.affiliation) {
    jsonLd.affiliation = {
      "@type": "Organization",
      name: person.affiliation.name,
      url: person.affiliation.url,
    };
  }

  return jsonLd;
}

export function getAllPersonJsonLd(): Person[] {
  return PERSON_IDS.map((slug) => getPersonJsonLd(slug));
}

export function getProfilePageJsonLd(
  slug: PersonId,
  canonicalUrl: string,
): Graph {
  const person = getPersonJsonLd(slug);
  const profilePage: ProfilePage = {
    "@type": "ProfilePage",
    "@id": `${canonicalUrl}#profile`,
    url: canonicalUrl,
    name: PEOPLE[slug].name,
    mainEntity: { "@id": personId(slug) },
    isPartOf: {
      "@type": "WebSite",
      name: "Quantus",
      url: env.SITE_BASE_URL,
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [profilePage, person, organizationJsonLd],
  };
}

export function getWhitepaperJsonLdGraph(
  locale: string,
  version: string | undefined,
  authorNames: string[],
): Graph {
  const article: TechArticle = getWhitepaperJsonLd(
    locale,
    version,
    authorNames,
  );

  const authorPeople = authorNames
    .map((name) => getPersonByName(name))
    .filter((person): person is NonNullable<typeof person> => Boolean(person))
    .filter(
      (person, index, list) =>
        list.findIndex((entry) => entry.id === person.id) === index,
    )
    .map((person) => getPersonJsonLd(person.id));

  return {
    "@context": "https://schema.org",
    "@graph": [article, ...authorPeople, organizationJsonLd],
  };
}
