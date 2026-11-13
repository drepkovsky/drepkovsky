import { defineConfig } from "astro/config";
import { work } from "./src/content/work";

export default defineConfig({
  site: "https://drepkovsky.com",
  output: "static",
  redirects: {
    "/about": "/",
    "/work": "/#experience",
    ...Object.fromEntries(work.map(({ slug }) => [`/work/${slug}`, "/#experience"])),
  },
});
