import type { ImageMetadata } from "astro";
import type { PersonId } from "@/constants/people";
import christopherSmith from "@/assets/team/christopher-smith.webp";
import joeMattia from "@/assets/team/joe-mattia.webp";
import jonathanAngle from "@/assets/team/jonathan-angle.webp";

export const PERSON_IMAGES: Record<PersonId, ImageMetadata> = {
  "christopher-smith": christopherSmith,
  "joe-mattia": joeMattia,
  "jonathan-angle": jonathanAngle,
};
