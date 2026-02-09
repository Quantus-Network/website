import fs from "node:fs";
import path from "node:path";
import { PDFParse } from "pdf-parse";

// Configuration
const REPO_BASE =
    "https://raw.githubusercontent.com/Quantus-Network/whitepaper/main";
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
const OUTPUT_DIR = "./public/whitepapers";



async function processWhitepaper(lang) {
    console.log(`Processing [${lang}] whitepaper...`);

    // 1. Fetch the PDF
    const url = `${REPO_BASE}/whitepaper.pdf`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch ${lang} PDF: ${res.status} ${res.statusText}`);
    }
    const buffer = await res.arrayBuffer();
    const pdfData = new Uint8Array(buffer);

    // Ensure directory exists
    const langDir = path.join(OUTPUT_DIR, lang);
    fs.mkdirSync(langDir, { recursive: true });

    // 2. Save the PDF (for download/iframe)
    fs.writeFileSync(path.join(langDir, "whitepaper.pdf"), pdfData);

    // 3. Extract text (for SEO)
    const parser = new PDFParse({ data: pdfData });

    try {
        const textResult = await parser.getText();
        // Save only the first 2000 chars to avoid bloating the HTML
        const seoText = textResult.text.substring(0, 2000).replace(/\n/g, " ");
        const seoContent = { text: seoText };
        fs.writeFileSync(
            path.join(langDir, "seo-content.json"),
            JSON.stringify(seoContent),
        );

        // 4. Generate thumbnail (for mobile UX)
        // Renders page 1 to a PNG via pdf-parse's built-in screenshot
        const screenshotResult = await parser.getScreenshot({
            partial: [1],
            desiredWidth: 600,
            imageBuffer: true,
            imageDataUrl: false,
        });

        const firstPage = screenshotResult.pages[0];
        if (firstPage?.data) {
            fs.writeFileSync(path.join(langDir, "thumb.png"), firstPage.data);
        } else {
            console.warn(`⚠️ [${lang}] Could not generate thumbnail for page 1.`);
        }
    } finally {
        await parser.destroy();
    }

    console.log(`✅ [${lang}] Ready: PDF, SEO text, and thumbnail saved.`);
}

// Run for all languages
(async () => {
    try {
        // await Promise.all(SUPPORTED_LOCALES.map(processWhitepaper));
        await processWhitepaper("en-US");
        console.log("All whitepapers synced successfully.");
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("Failed to sync whitepapers:", message);
        process.exit(1);
    }
})();
