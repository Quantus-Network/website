import { describe, expect, test } from "bun:test";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const i18nDir = join(import.meta.dir, "../../i18n");
const localeFiles = readdirSync(i18nDir).filter((name) => name.endsWith(".json"));

describe("home hero ticker mainnet", () => {
  test("every locale uses the scheduled date as the shared source", () => {
    expect(localeFiles).toHaveLength(9);

    for (const file of localeFiles) {
      const data = JSON.parse(readFileSync(join(i18nDir, file), "utf8")) as {
        home: {
          hero_banner: { ticker: { mainnet: { label: string; value: string } } };
        };
      };
      const { label, value } = data.home.hero_banner.ticker.mainnet;

      // The date is the shared source of truth and is not localised.
      expect(value, `${file}: ${value}`).toBe("9/9/26");

      // The label is translated, so only assert it is present and legible.
      expect(label.length > 0, `${file}: empty label`).toBe(true);
      expect(/\?{2}/.test(label), `${file}: ${label}`).toBe(false);
      expect(/\?{2}/.test(value), `${file}: ${value}`).toBe(false);

      // The label must not still carry the date it was split away from.
      expect(label.includes("9/9/26"), `${file}: ${label}`).toBe(false);
    }
  });
});
