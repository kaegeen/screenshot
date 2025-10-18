// screenshot.js
import puppeteer from "puppeteer"; // Node.js >= v18 supports ES modules

const url = process.argv[2];
const output = process.argv[3] || "screenshot.png";

if (!url) {
  console.log("Usage: node screenshot.js <url> [output-file]");
  console.log("Example: node screenshot.js https://openai.com openai.png");
  process.exit(1);
}

(async () => {
  console.log(`🌐 Capturing screenshot of: ${url}`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.screenshot({ path: output, fullPage: true });
  await browser.close();
  console.log(`✅ Screenshot saved as: ${output}`);
})();
