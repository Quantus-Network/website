import { visit } from "unist-util-visit";
import type { Element, ElementContent, Root, Text } from "hast";

export const BLOG_ADAPTIVE_TABLE_CLASS = "blog-adaptive-table";
export const BLOG_ADAPTIVE_TABLE_WRAP_CLASS = "blog-adaptive-table-wrap";
export const BLOG_ADAPTIVE_TABLE_LABEL_CLASS = "blog-adaptive-table-label";
export const BLOG_ADAPTIVE_TABLE_VALUE_CLASS = "blog-adaptive-table-value";

type VFileLike = {
  path?: string;
  history?: string[];
};

function filePath(file: VFileLike): string | undefined {
  return file.path || file.history?.[0];
}

export function isBlogContentPath(path: string | undefined): path is string {
  if (!path) return false;
  return path.replaceAll("\\", "/").includes("/contents/blogs/");
}

function classList(node: Element): string[] {
  const className = node.properties?.className;
  if (Array.isArray(className)) return className.map(String);
  if (typeof className === "string") {
    return className.split(/\s+/).filter(Boolean);
  }
  return [];
}

function hasClass(node: Element, className: string): boolean {
  return classList(node).includes(className);
}

function addClass(node: Element, className: string): void {
  if (hasClass(node, className)) return;
  node.properties = {
    ...node.properties,
    className: [...classList(node), className],
  };
}

function childElements(node: Element, tagName?: string): Element[] {
  return node.children.filter((child): child is Element => {
    return child.type === "element" && (!tagName || child.tagName === tagName);
  });
}

function textContent(node: ElementContent): string {
  if (node.type === "text") return node.value;
  if (node.type === "element") {
    return node.children.map(textContent).join("");
  }
  return "";
}

function span(className: string, children: ElementContent[]): Element {
  return {
    type: "element",
    tagName: "span",
    properties: { className: [className] },
    children,
  };
}

function labelSpan(value: string): Element {
  const label: Text = { type: "text", value };
  return span(BLOG_ADAPTIVE_TABLE_LABEL_CLASS, [label]);
}

function assertNoCellSpan(cell: Element, filePath: string): void {
  const properties = cell.properties ?? {};
  const colSpan = properties.colSpan ?? properties.colspan;
  const rowSpan = properties.rowSpan ?? properties.rowspan;
  const spansColumns = colSpan != null && Number(colSpan) !== 1;
  const spansRows = rowSpan != null && Number(rowSpan) !== 1;
  if (spansColumns || spansRows) {
    throw new Error(
      `Blog table in ${filePath} uses colspan or rowspan. Adaptive tables need one cell per column.`,
    );
  }
}

export function adaptBlogTable(table: Element, sourcePath: string): void {
  const thead = childElements(table, "thead")[0];
  const headerRow = thead ? childElements(thead, "tr")[0] : undefined;
  const headerCells = headerRow ? childElements(headerRow, "th") : [];

  if (!headerRow || headerCells.length === 0) {
    throw new Error(
      `Blog table in ${sourcePath} is missing a header row. Markdown tables must start with a header row.`,
    );
  }

  const headers = headerCells.map((cell, index) => {
    assertNoCellSpan(cell, sourcePath);
    const header = textContent(cell).replace(/\s+/g, " ").trim();
    if (!header) {
      throw new Error(
        `Blog table in ${sourcePath} has a blank header in column ${index + 1}.`,
      );
    }
    return header;
  });

  const tbody = childElements(table, "tbody")[0];
  const bodyRows = tbody
    ? childElements(tbody, "tr")
    : childElements(table, "tr").filter((row) => row !== headerRow);

  for (const row of bodyRows) {
    const cells = childElements(row, "td");
    for (const cell of cells) {
      assertNoCellSpan(cell, sourcePath);
    }
    if (cells.length !== headers.length) {
      throw new Error(
        `Blog table in ${sourcePath} has a row with ${cells.length} cells but ${headers.length} headers. Every row must match the header column count.`,
      );
    }

    cells.forEach((cell, index) => {
      const header = headers[index];
      if (!header) {
        throw new Error(
          `Blog table in ${sourcePath} is missing a header for column ${index + 1}.`,
        );
      }
      const value = span(BLOG_ADAPTIVE_TABLE_VALUE_CLASS, cell.children);
      cell.children = index === 0 ? [value] : [labelSpan(header), value];
    });
  }

  addClass(table, BLOG_ADAPTIVE_TABLE_CLASS);
}

export default function rehypeAdaptiveTables() {
  return (tree: Root, file: VFileLike) => {
    const sourcePath = filePath(file);
    if (!isBlogContentPath(sourcePath)) return;

    const targets: { table: Element; parent: Root | Element; index: number }[] =
      [];

    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "table" || parent == null || index == null) return;
      if (
        parent.type === "element" &&
        hasClass(parent, BLOG_ADAPTIVE_TABLE_WRAP_CLASS)
      ) {
        return;
      }
      targets.push({ table: node, parent, index });
    });

    for (const { table, parent, index } of targets) {
      adaptBlogTable(table, sourcePath);
      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: { className: [BLOG_ADAPTIVE_TABLE_WRAP_CLASS] },
        children: [table],
      };
    }
  };
}
