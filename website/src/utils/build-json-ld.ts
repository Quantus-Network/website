import type { Graph, Thing, WithContext } from "schema-dts";

export function JsonLd<T extends Thing>(json: WithContext<T>) {
  return json;
}

export function JsonLdGraph(json: Graph) {
  return json;
}
