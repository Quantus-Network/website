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

async function generatePdf(browser, locale, version) {
  const urlPath =
    locale === DEFAULT_LOCALE
      ? `/whitepaper/v${version}`
      : `/${locale}/whitepaper/v${version}`;

  console.log(`  URL: ${BASE_URL}${urlPath}?print=true`);

  const url = `${BASE_URL}${urlPath}?print=true`;
  const outputDir = path.join(OUTPUT_BASE, locale);
  const outputFile = path.join(outputDir, `whitepaper-v${version}.pdf`);

  fs.mkdirSync(outputDir, { recursive: true });

  console.log(`  Generating PDF: ${locale}/v${version} -> ${outputFile}`);

  const page = await browser.newPage();

  try {
    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    await page.waitForSelector("h1", { timeout: 30000 });

    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        let distance = 100;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    const LOGO_ICON = `<svg width="18" height="17" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#c0)"><path d="M42.99 39.33L35.52 32.73C42.53 25.1 42.23 13.47 34.62 6.19C26.7-1.4 13.86-1.4 5.94 6.19C-1.98 13.77-1.98 26.06 5.94 33.65C9.9 37.44 15.09 39.33 20.28 39.33H42.99ZM29.4 11.19C34.19 15.78 34.42 23.07 30.09 27.92L11.17 11.19C16.2 6.37 24.36 6.37 29.4 11.19Z" fill="url(#fi0)"/><path d="M11.17 11.19C8.83 13.42 7.39 16.51 7.39 19.91C7.39 26.73 13.16 32.26 20.28 32.26C24.21 32.26 27.72 30.57 30.09 27.92L11.17 11.19Z" fill="url(#fi1)"/><path opacity="0.8" d="M29.4 11.19C34.19 15.78 34.42 23.07 30.09 27.92L35.52 32.73C42.53 25.1 42.23 13.47 34.62 6.19" fill="url(#fi2)"/></g><defs><linearGradient id="fi0" x1="7.05" y1="39.43" x2="36.12" y2="9.06" gradientUnits="userSpaceOnUse"><stop offset="0.07" stop-color="#00F"/><stop offset="0.5" stop-color="#ED4CCE"/><stop offset="1" stop-color="#FFE91F"/></linearGradient><linearGradient id="fi1" x1="7.01" y1="21.72" x2="29.71" y2="21.72" gradientUnits="userSpaceOnUse"><stop stop-color="#1E1E95"/><stop offset="0.94" stop-color="#ED4CCE" stop-opacity="0.5"/></linearGradient><linearGradient id="fi2" x1="35.75" y1="30.92" x2="45.21" y2="19.56" gradientUnits="userSpaceOnUse"><stop stop-color="#00F"/><stop offset="0.41" stop-color="#FC6AD4" stop-opacity="0.2"/><stop offset="0.89" stop-color="#FFDE1D" stop-opacity="0"/></linearGradient><clipPath id="c0"><rect width="43" height="39" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>`;

    const LOGO_TEXT = `<svg width="80" height="12" viewBox="0 0 172 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#ct0)"><path d="M24.5449 22.6748L21.0807 19.9424C23.2115 17.8773 24.528 15.07 24.528 11.9783C24.5322 5.64884 19.03 0.5 12.2661 0.5C5.50224 0.5 0 5.64884 0 11.9783C0 18.3077 5.50224 23.4566 12.2661 23.4566C15.3084 23.4566 18.0933 22.4142 20.241 20.6887L23.8023 23.5039L24.5449 22.6787V22.6748ZM12.2661 1.58189C18.3929 1.58189 23.3761 6.24506 23.3761 11.9783C23.3761 14.8054 22.1651 17.368 20.1988 19.2475L3.27434 5.87785C5.29549 3.27579 8.57405 1.58189 12.2661 1.58189ZM19.3465 19.9819C17.4224 21.4744 14.954 22.3747 12.2661 22.3747C6.13939 22.3747 1.15615 17.7115 1.15615 11.9783C1.15615 10.0909 1.70046 8.31803 2.64142 6.79391L19.3465 19.9858V19.9819Z" fill="#333"/><path d="M47.5202 0.768497V14.6593C47.5202 18.9118 43.8324 22.3747 39.2964 22.3747C34.7604 22.3747 31.0726 18.9118 31.0726 14.6593V0.768497H29.9207V14.6593C29.9207 19.5081 34.1275 23.4566 39.3006 23.4566C44.4738 23.4566 48.6806 19.512 48.6806 14.6593V0.768497H47.5287H47.5202Z" fill="#333"/><path d="M147.071 0.768497V14.6593C147.071 18.9118 143.383 22.3747 138.847 22.3747C134.311 22.3747 130.623 18.9118 130.623 14.6593V0.768497H129.471V14.6593C129.471 19.5081 133.678 23.4566 138.851 23.4566C144.025 23.4566 148.231 19.512 148.231 14.6593V0.768497H147.079H147.071Z" fill="#333"/><path d="M99.0699 0.768497V21.1704L82.2087 0.768497H81.4661V23.0459H82.5631V2.8691L99.2344 23.0499H100.167V0.768497H99.0699Z" fill="#333"/><path d="M75.2045 23.0341H76.4956L64.6008 0.768497H63.7274L51.8284 23.0341H53.1195L57.3306 15.1489H70.9892L75.2003 23.0341H75.2045ZM64.1662 2.36764L70.4195 14.067H57.9171L64.1704 2.36764H64.1662Z" fill="#333"/><path d="M123.906 0.768497H105.724V1.75167H114.269V23.0499H115.361V1.75167H123.906V0.768497Z" fill="#333"/><path d="M171.354 15.0068C170.932 14.3355 170.316 13.767 169.531 13.3129C168.768 12.8706 167.823 12.4995 166.734 12.2073C165.658 11.9191 164.447 11.6506 163.13 11.4018C161.822 11.157 160.687 10.9043 159.755 10.6516C158.839 10.4028 158.08 10.1027 157.506 9.75923C156.949 9.42755 156.531 9.01691 156.27 8.53914C156.004 8.05743 155.869 7.44146 155.869 6.71099C155.869 5.98052 156.008 5.26189 156.282 4.66567C156.552 4.07339 156.983 3.55614 157.569 3.12575C158.16 2.68747 158.932 2.3479 159.86 2.11494C160.801 1.87803 161.953 1.75562 163.282 1.75562C164.612 1.75562 165.835 1.92541 166.814 2.26103C167.78 2.5927 168.73 3.22446 169.629 4.12867L169.84 4.33794L170.671 3.5127L170.485 3.32712C169.523 2.35579 168.443 1.65691 167.278 1.24232C166.122 0.831674 164.755 0.626352 163.211 0.626352C161.919 0.626352 160.742 0.760601 159.704 1.0212C158.658 1.28575 157.746 1.68455 156.995 2.2018C156.236 2.72695 155.645 3.3824 155.236 4.14446C154.826 4.90652 154.62 5.79099 154.62 6.77416C154.62 7.75734 154.814 8.52335 155.189 9.16695C155.569 9.81056 156.139 10.3515 156.881 10.774C157.603 11.1846 158.497 11.5282 159.531 11.7888C160.548 12.0454 161.734 12.2902 163.05 12.5153C164.392 12.7561 165.578 13.0246 166.569 13.3089C167.54 13.5853 168.35 13.9288 168.97 14.3197C169.574 14.7027 170.025 15.1608 170.316 15.682C170.607 16.2032 170.751 16.8626 170.751 17.6325C170.751 19.1882 170.122 20.3175 168.827 21.0796C167.51 21.8574 165.675 22.2523 163.375 22.2523C161.611 22.2523 160.021 21.9996 158.645 21.5021C157.274 21.0045 155.983 20.1912 154.814 19.0737L154.624 18.896L153.675 19.6502L153.898 19.8555C155.194 21.044 156.616 21.9285 158.13 22.4813C159.641 23.0341 161.392 23.3144 163.341 23.3144C166 23.3144 168.118 22.8209 169.645 21.8535C171.207 20.8624 171.996 19.4094 171.996 17.5378C171.996 16.5309 171.78 15.678 171.354 15.0028V15.0068Z" fill="#333"/></g><defs><clipPath id="ct0"><rect width="172" height="23" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>`;

    await page.pdf({
      path: outputFile,
      format: "A4",
      margin: { top: "60px", right: "50px", bottom: "80px", left: "50px" },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `<span></span>`,
      footerTemplate: `
        <div style="
          font-size: 9px;
          color: #666;
          width: 100%;
          padding: 8px 0 0;
          margin: 0 76px;
          border-top: 1px solid #d1d5db;
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <div style="display: flex; align-items: center; gap: 6px;">
            ${LOGO_ICON}
            ${LOGO_TEXT}
          </div>
          
          <div style="font-size: 11px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
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
    await page.close();
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

  console.log("\nStarting preview server...");
  const server = await startPreviewServer();

  try {
    console.log("Generating PDFs...\n");

    for (const [locale, versions] of versionMap) {
      for (const version of versions) {
        await generatePdf(browser, locale, version);
      }
    }

    console.log("\nAll PDFs generated successfully.");
  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch((err) => {
  console.error("PDF generation failed:", err.message);
  console.log("Build completed but PDF generation was skipped.");
});
