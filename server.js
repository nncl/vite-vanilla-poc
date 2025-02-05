import compression from "compression";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Enable Gzip Compression
app.use(compression());

// ✅ Serve static files from 'dist' and set caching headers
app.use(express.static(path.join(__dirname, "dist"), {
  maxAge: "1y",
  etag: false
}));

// ✅ Serve clean URLs (e.g., `/about` → `/about.html`)
app.get("/:page", (req, res, next) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, "dist", `${page}.html`);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    next(); // Pass to 404 handler
  }
});

// ✅ API Endpoint for `/api/feat`
app.get("/api/feat", (req, res) => {
  res.json({
    feature: "Example Feature",
    description: "This is an example feature endpoint.",
    status: "active"
  });
});

// ✅ Catch-all 404 handler → Redirect to `/` but keep 404 status
app.use((req, res) => {
  res.status(404).send(`
    <script>
      console.warn('404 Not Found: Redirecting to home');
      window.location.replace("/");
    </script>
  `);
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
