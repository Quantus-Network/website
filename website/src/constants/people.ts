import env from "@/config";

export const PERSON_IDS = [
  "christopher-smith",
  "joe-mattia",
  "jonathan-angle",
] as const;

export type PersonId = (typeof PERSON_IDS)[number];

export type PersonRecord = {
  id: PersonId;
  name: string;
  jobTitle: string;
  bio: string;
  sameAs: readonly string[];
  social: {
    platform: "X";
    url: string;
    username: string;
  };
  isFounder?: boolean;
  affiliation?: {
    name: string;
    url: string;
    jobTitle: string;
  };
};

export const PEOPLE: Record<PersonId, PersonRecord> = {
  "christopher-smith": {
    id: "christopher-smith",
    name: "Christopher Smith",
    jobTitle: "Founder and CEO, Quantus",
    bio: "Christopher Smith is Editor-in-Chief of Quantum Canary and founder and CEO of Quantus. A technology entrepreneur working across artificial intelligence, blockchain and quantum computing, he has spent more than a decade building tools for decentralized systems. His earlier ventures include BitMesh, Lunyr and FactoryDAO, and he contributed to early Bitcoin software and privacy tooling. Chris is the author of the Quantus whitepaper and host of the QDay podcast, where he speaks with researchers and builders about quantum computing, cryptography and the future of digital money.",
    sameAs: ["https://x.com/YuviLightman"],
    social: {
      platform: "X",
      url: "https://x.com/YuviLightman",
      username: "@YuviLightman",
    },
    isFounder: true,
    affiliation: {
      name: "Quantum Canary",
      url: "https://www.quantumcanary.org",
      jobTitle: "Editor-in-Chief",
    },
  },
  "joe-mattia": {
    id: "joe-mattia",
    name: "Joseph Mattia",
    jobTitle: "Co-founder and COO, Quantus",
    bio: "Joseph Mattia is co-founder and COO of Quantus, where he leads operations and helps turn post-quantum research into product execution and community programs. He has represented Quantus at QDay events and co-hosted early episodes of the QDay podcast, bringing an operator's perspective to questions about blockchain security, adoption and coordination. Joe focuses on the practical choices builders, institutions and asset holders must make before quantum risk becomes an emergency.",
    sameAs: ["https://x.com/JoeMattia"],
    social: {
      platform: "X",
      url: "https://x.com/JoeMattia",
      username: "@JoeMattia",
    },
    isFounder: true,
  },
  "jonathan-angle": {
    id: "jonathan-angle",
    name: "Jonathan Angle",
    jobTitle: "Communications Director, Quantus",
    bio: "Jonathan “Jangle” Angle is Director of Communications at Quantus, the post-quantum blockchain. With a background in IT security, consulting, and DeFi, he has been integral to Quantus’s strategy, product, and operations. He writes on blockchain security, post-quantum cryptography, and DeFi as @defijangle.",
    sameAs: ["https://x.com/defijangle"],
    social: {
      platform: "X",
      url: "https://x.com/defijangle",
      username: "@defijangle",
    },
  },
};

export function isPersonId(id: string): id is PersonId {
  return Object.hasOwn(PEOPLE, id);
}

export function getPersonByName(name: string): PersonRecord | undefined {
  return Object.values(PEOPLE).find((person) => person.name === name);
}

/** Canonical English profile URL. Person `@id` is always this URL + `#person`. */
export function personUrl(slug: PersonId): string {
  return `${env.SITE_BASE_URL.replace(/\/$/, "")}/team/${slug}`;
}

export function personId(slug: PersonId): string {
  return `${personUrl(slug)}#person`;
}
