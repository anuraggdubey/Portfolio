import fs from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import { SitemapStream, streamToPromise } from "sitemap";
import { siteConfig, siteRoutes } from "../seo.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");

const ensureDistExists = async () => {
  try {
    const stat = await fs.stat(distDir);
    if (!stat.isDirectory()) {
      throw new Error("dist exists but is not a directory");
    }
  } catch {
    throw new Error("Run the Vite build before generating SEO files.");
  }
};

const createSitemap = async () => {
  const links = siteRoutes.map((route) => ({
    url: route.path,
    changefreq: route.changefreq,
    priority: route.priority,
    lastmodISO: new Date().toISOString()
  }));

  const stream = new SitemapStream({ hostname: siteConfig.siteUrl });
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));

  await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap.toString(), "utf8");
};

const createRobots = async () => {
  const robotsTxt = [
    "User-agent: *",
    "Allow: /",
    "",
    `Host: ${new URL(siteConfig.siteUrl).host}`,
    `Sitemap: ${siteConfig.siteUrl}/sitemap.xml`,
    ""
  ].join("\n");

  await fs.writeFile(path.join(distDir, "robots.txt"), robotsTxt, "utf8");
};

const run = async () => {
  await ensureDistExists();
  await createSitemap();
  await createRobots();
};

run().catch((error) => {
  console.error("SEO generation failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
