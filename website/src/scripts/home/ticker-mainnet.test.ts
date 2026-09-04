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
        home: { hero_banner: { ticker: { mainnet: string } } };
      };
      const mainnet = data.home.hero_banner.ticker.mainnet;
      expect(mainnet.includes("9/9/26"), `${file}: ${mainnet}`).toBe(true);
      expect(/\?{2}/.test(mainnet), `${file}: ${mainnet}`).toBe(false);
    }
  });
});
