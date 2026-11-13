# Dominik Repkovský

Source for [drepkovsky.com](https://drepkovsky.com), a short personal website built with Astro.

```bash
bun install
bun run dev
```

```bash
bun run typecheck
bun run build
bun run preview
```

The build writes plain HTML, CSS and assets to `dist/`. Upload that directory to a static host. The Dockerfile serves the same files with unprivileged nginx on port 3000.

Edit translated text in `src/content/i18n.ts`, roles and links in `src/content/site.ts`, and project explanations in `src/content/projects.ts`. The homepage is `src/components/Home.astro`, with styles in `src/styles/site.css`. `src/content/work.ts` retains the previous project inventory to redirect old project URLs to the short experience section.

The contact form opens a prefilled draft in the visitor's mail app. The visitor sends it manually. The plain email link also works without JavaScript.

The `/cv` page contains the full CV and a Print / Save PDF action. Its source data is in `src/content/cv.ts`. English pages are `/` and `/cv`; Slovak pages are `/sk/` and `/sk/cv`. The language switch links between the matching pages. The homepage follows the system's light or dark appearance.

Existing Umami analytics are included in production for drepkovsky.com. Previous `/about`, `/work` and project URLs generate static redirects back to the homepage.
