import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const OUTPUT_BASE = path.join("./public", "whitepaper", "pdf");
const PORT = 4322;
const BASE_URL = `http://host.docker.internal:${PORT}`;

const SUPPORTED_LOCALES = [
  "en-US",
  "zh-CN",
  "ko-KR",
  "id-ID",
  "ja-JP",
  "ru-RU",
  "es-ES",
  "de-DE",
  "hi-IN",
];
const DEFAULT_LOCALE = "en-US";

function discoverVersions() {
  const contentDir = "./src/contents/whitepapers";
  const versions = new Map();

  for (const locale of SUPPORTED_LOCALES) {
    const localeDir = path.join(contentDir, locale);
    if (!fs.existsSync(localeDir)) continue;

    const files = fs
      .readdirSync(localeDir)
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
    const localeVersions = files.map((f) =>
      f.replace(/^v/, "").replace(/\.(mdx|md)$/, ""),
    );
    if (localeVersions.length > 0) {
      versions.set(locale, localeVersions);
    }
  }

  return versions;
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const server = spawn(
      "npx",
      ["astro", "preview", "--port", String(PORT), "--host", "0.0.0.0"],
      {
        cwd: process.cwd(),
        stdio: ["pipe", "pipe", "pipe"],
        env: { ...process.env, NODE_ENV: "production" },
      },
    );

    let started = false;

    const onData = (data) => {
      const output = data.toString();
      if (!started && output.includes("localhost")) {
        started = true;
        resolve(server);
      }
    };

    server.stdout.on("data", onData);
    server.stderr.on("data", onData);

    server.on("error", reject);

    setTimeout(() => {
      if (!started) {
        started = true;
        resolve(server);
      }
    }, 5000);
  });
}

async function generatePdf(puppeteer, locale, version) {
  const urlPath =
    locale === DEFAULT_LOCALE
      ? `/whitepaper/v${version}`
      : `/${locale}/whitepaper/v${version}`;

  console.log(`  URL: ${BASE_URL}${urlPath}?print=true`);

  const url = `${BASE_URL}${urlPath}?print=true`;
  const outputDir = path.join(OUTPUT_BASE, locale);
  const outputFile = path.join(outputDir, `whitepaper-v${version}.pdf`);

  if (fs.existsSync(outputFile)) {
    console.log(`  PDF already exists: ${outputFile}`);
    return;
  }

  fs.mkdirSync(outputDir, { recursive: true });

  console.log(`  Generating PDF: ${locale}/v${version} -> ${outputFile}`);

  let browser;
  try {
    browser = await puppeteer.connect({
      browserWSEndpoint: `ws://127.0.0.1:33000`,
    });
  } catch (err) {
    console.warn(`\nCould not connect to browser: ${err.message}`);
    console.log("Skipping PDF generation.");
    return;
  }

  const page = await browser.newPage();

  try {
    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    await page.pdf({
      path: outputFile,
      format: "A4",
      margin: { top: "35px", right: "45px", bottom: "80px", left: "45px" },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `<span></span>`,
      footerTemplate: `
        <div style="
          font-size: 9px;
          color: #666;
          width: 100%;
          padding: 8px 0 0;
          margin: 0 71px;
          border-top: 1px solid #E8E8E8;
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <span style="color: #FF6B35; font-size: 16px; font-family: 'IBM Plex Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; line-height: 35.1px; letter-spacing: 2.56px;">
            QUANTUS.NETWORK
          </span>
          
          <div style="font-size: 16px; font-family: 'IBM Plex Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
            <span class="pageNumber"></span> / <span class="totalPages"></span>
          </div>
        </div>
      `,
    });

    console.log(`  Done: ${outputFile}`);
  } catch (err) {
    console.warn(
      `  Warning: Failed to generate PDF for ${locale}/v${version}: ${err.message}`,
    );
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log("Whitepaper PDF Generation");
  console.log("=".repeat(50));

  const versionMap = discoverVersions();
  if (versionMap.size === 0) {
    console.log("No whitepaper content found. Skipping PDF generation.");
    return;
  }

  console.log("\nDiscovered content:");
  for (const [locale, versions] of versionMap) {
    console.log(`  ${locale}: ${versions.map((v) => `v${v}`).join(", ")}`);
  }

  let puppeteer;
  try {
    puppeteer = await import("puppeteer");
  } catch {
    console.warn("\nPuppeteer not available. Skipping PDF generation.");
    console.log(
      "To enable PDF generation, run: npx puppeteer browsers install chrome",
    );
    return;
  }

  console.log("\nStarting preview server...");
  const server = await startPreviewServer();

  try {
    console.log("Generating PDFs...\n");

    for (const [locale, versions] of versionMap) {
      for (const version of versions) {
        await generatePdf(puppeteer, locale, version);
      }
    }

    console.log("\nAll PDFs generated successfully.");
  } catch (err) {
    console.error("PDF generation failed:", err.message);
    console.log("Build completed but PDF generation was skipped.");
  }

  server.kill();
}

main();
