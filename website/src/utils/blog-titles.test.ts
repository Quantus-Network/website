import { describe, expect, test } from "bun:test";
import { blogMetaTitle } from "./blog-titles";

describe("blogMetaTitle", () => {
  test("uses title when metaTitle is omitted", () => {
    expect(
      blogMetaTitle({ title: "Quantus Weekly: 170 QTPS and Miner v4" }),
    ).toBe("Quantus Weekly: 170 QTPS and Miner v4");
  });

  test("uses metaTitle when it is set", () => {
    expect(
      blogMetaTitle({
        title: "Quantus Weekly: 170 QTPS and Miner v4 — a longer on-page heading",
        metaTitle: "Quantus Weekly: 170 QTPS and Miner v4",
      }),
    ).toBe("Quantus Weekly: 170 QTPS and Miner v4");
  });
});
