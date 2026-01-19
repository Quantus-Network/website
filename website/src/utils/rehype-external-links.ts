import { visit } from "unist-util-visit";
import type { Element } from "hast";

/**
 * Rehype plugin to add target="_blank" and rel="noopener noreferrer" to all links
 */
export default function rehypeExternalLinks() {
  return (tree: any) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "a" && node.properties) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    });
  };
}
