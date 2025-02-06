import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load metadata from src/meta-config.json
const metaConfigPath = path.join(__dirname, "src", "meta-config.json");
const metaConfig = JSON.parse(fs.readFileSync(metaConfigPath, "utf8"));

const DIST_DIR = path.join(__dirname, "dist");

function injectMetaTags(htmlFile, metadata) {
  const filePath = path.join(DIST_DIR, htmlFile);

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Skipping: ${htmlFile} (File not found)`);
    return;
  }

  let htmlContent = fs.readFileSync(filePath, "utf8");

  // Replace or inject meta tags
  htmlContent = htmlContent
    .replace(/<title>.*<\/title>/, `<title>${metadata.title}</title>`)
    .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${metadata.description}">`)
    .replace(/<meta name="keywords" content=".*?">/, `<meta name="keywords" content="${metadata.keywords}">`)
    .replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${metadata.title}">`)
    .replace(/<meta property="og:description" content=".*?">/, `<meta property="og:description" content="${metadata.description}">`)
    .replace(/<meta property="og:image" content=".*?">/, `<meta property="og:image" content="${metadata.image}">`)
    .replace(/<meta property="og:url" content=".*?">/, `<meta property="og:url" content="${metadata.url}">`)
    .replace(/<meta name="twitter:title" content=".*?">/, `<meta name="twitter:title" content="${metadata.title}">`)
    .replace(/<meta name="twitter:description" content=".*?">/, `<meta name="twitter:description" content="${metadata.description}">`)
    .replace(/<meta name="twitter:image" content=".*?">/, `<meta name="twitter:image" content="${metadata.image}">`);

  // Write modified HTML back to dist/
  fs.writeFileSync(filePath, htmlContent, "utf8");
  console.log(`✅ Updated meta tags for: ${htmlFile}`);
}

// Process each file defined in meta-config.json
Object.entries(metaConfig).forEach(([htmlFile, metadata]) => {
  injectMetaTags(htmlFile, metadata);
});

console.log("🎉 Meta tag injection complete!");
