import { describe, expect, test } from "bun:test";
import type { Element, ElementContent, Root, Text } from "hast";
import rehypeAdaptiveTables, {
  adaptBlogTable,
  isBlogContentPath,
} from "./rehype-adaptive-tables";

const BLOG_PATH =
  "/Users/q-beast/Dewata_Software/quantus/website/website/src/contents/blogs/en-US/weekly-update.mdx";
const WHITEPAPER_PATH =
  "/Users/q-beast/Dewata_Software/quantus/website/website/src/contents/whitepapers/en-US/v0.4.0.mdx";

function text(value: string): Text {
  return { type: "text", value };
}

function el(
  tagName: string,
  children: ElementContent[] = [],
  properties: Element["properties"] = {},
): Element {
  return { type: "element", tagName, properties, children };
}

function tableFrom(headers: string[], rows: string[][]): Element {
  return el("table", [
    el("thead", [
      el(
        "tr",
        headers.map((header) => el("th", [text(header)])),
      ),
    ]),
    el(
      "tbody",
      rows.map((row) =>
        el(
          "tr",
          row.map((cell) => el("td", [text(cell)])),
        ),
      ),
    ),
  ]);
}

function classList(node: Element): string[] {
  const className = node.properties?.className;
  if (Array.isArray(className)) return className.map(String);
  if (typeof className === "string")
    return className.split(/\s+/).filter(Boolean);
  return [];
}

function childElements(node: Element, tagName?: string): Element[] {
  return node.children.filter((child): child is Element => {
    return child.type === "element" && (!tagName || child.tagName === tagName);
  });
}

function cellLabels(table: Element): string[][] {
  const bodyRows = childElements(
    childElements(table, "tbody")[0] ?? table,
    "tr",
  );
  return bodyRows.map((row) =>
    childElements(row, "td").map((cell) => {
      const label = childElements(cell).find((child) =>
        classList(child).includes("blog-adaptive-table-label"),
      );
      if (!label) return "";
      const first = label.children[0];
      return first?.type === "text" ? first.value : "";
    }),
  );
}

describe("isBlogContentPath", () => {
  test("accepts blog collection files, including Windows separators", () => {
    expect(isBlogContentPath(BLOG_PATH)).toBe(true);
    expect(
      isBlogContentPath(
        "C:\\repo\\website\\src\\contents\\blogs\\de-DE\\weekly-update.mdx",
      ),
    ).toBe(true);
  });

  test("rejects whitepaper and unknown paths", () => {
    expect(isBlogContentPath(WHITEPAPER_PATH)).toBe(false);
    expect(isBlogContentPath(undefined)).toBe(false);
  });
});

describe("adaptBlogTable", () => {
  test("labels every cell except the first column from the header row", () => {
    const table = tableFrom(
      ["Release", "Throughput", "Notes"],
      [
        ["Miner v4", "4.1x GPU", "Retest hardware"],
        ["Runtime", "170 QTPS", "Before ZK aggregation"],
      ],
    );

    adaptBlogTable(table, BLOG_PATH);

    expect(classList(table)).toContain("blog-adaptive-table");
    expect(cellLabels(table)).toEqual([
      ["", "Throughput", "Notes"],
      ["", "Throughput", "Notes"],
    ]);
  });

  test("keeps rich cell children inside the value wrapper", () => {
    const table = el("table", [
      el("thead", [
        el("tr", [el("th", [text("Item")]), el("th", [text("Link")])]),
      ]),
      el("tbody", [
        el("tr", [
          el("td", [text("Docs")]),
          el("td", [
            el("a", [text("docs.quantus.com")], {
              href: "https://docs.quantus.com",
            }),
          ]),
        ]),
      ]),
    ]);

    adaptBlogTable(table, BLOG_PATH);

    const valueCell = childElements(
      childElements(childElements(table, "tbody")[0], "tr")[0],
      "td",
    )[1];
    const value = childElements(valueCell).find((child) =>
      classList(child).includes("blog-adaptive-table-value"),
    );
    expect(value).toBeDefined();
    expect(childElements(value as Element, "a")[0]?.properties?.href).toBe(
      "https://docs.quantus.com",
    );
  });

  test("throws when a blog table has no header row", () => {
    const table = el("table", [
      el("tbody", [el("tr", [el("td", [text("Miner v4")])])]),
    ]);

    expect(() => adaptBlogTable(table, BLOG_PATH)).toThrow(/header row/i);
  });

  test("throws when a header cell is blank", () => {
    const table = tableFrom(["Release", "   "], [["Miner v4", "4.1x"]]);

    expect(() => adaptBlogTable(table, BLOG_PATH)).toThrow(/blank header/i);
  });

  test("throws when a row has a different number of cells than headers", () => {
    const table = tableFrom(
      ["Release", "Throughput"],
      [["Miner v4", "4.1x", "extra"]],
    );

    expect(() => adaptBlogTable(table, BLOG_PATH)).toThrow(/column count/i);
  });

  test("throws when a cell spans columns", () => {
    const table = el("table", [
      el("thead", [el("tr", [el("th", [text("A")]), el("th", [text("B")])])]),
      el("tbody", [el("tr", [el("td", [text("wide")], { colSpan: 2 })])]),
    ]);

    expect(() => adaptBlogTable(table, BLOG_PATH)).toThrow(/colspan|rowspan/i);
  });
});

describe("rehypeAdaptiveTables", () => {
  test("wraps blog tables and leaves whitepaper tables unchanged", () => {
    const blogTree: Root = {
      type: "root",
      children: [tableFrom(["Item", "Value"], [["Miner", "v4"]])],
    };
    const whitepaperTable = tableFrom(["Item", "Value"], [["Miner", "v4"]]);
    const whitepaperTree: Root = { type: "root", children: [whitepaperTable] };

    rehypeAdaptiveTables()(blogTree, { path: BLOG_PATH });
    rehypeAdaptiveTables()(whitepaperTree, { path: WHITEPAPER_PATH });

    const wrap = blogTree.children[0] as Element;
    expect(wrap.tagName).toBe("div");
    expect(classList(wrap)).toContain("blog-adaptive-table-wrap");
    expect(cellLabels(childElements(wrap, "table")[0])).toEqual([
      ["", "Value"],
    ]);

    expect(whitepaperTree.children[0]).toBe(whitepaperTable);
    expect(classList(whitepaperTable)).not.toContain("blog-adaptive-table");
  });
});
