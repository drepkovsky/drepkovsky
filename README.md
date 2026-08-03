# drepkovsky.com

My site: what I build, who I have built it for, and how I work. Next.js, static
everywhere except the contact route, deployed to a K3s cluster I run myself.

## Stack

- **Next.js 16** on the App Router, `output: "standalone"`
- **Tailwind v4** with the design tokens as `@theme` roles, so light and dark
  are the same six roles at different values
- **Plunk** for contact mail, **Cap** for a proof-of-work spam check the visitor
  never sees, **Umami** for analytics without cookies
- All of it self-hosted

## Running it

```bash
bun install
bun run dev
```

Copy `.env.example` to `.env.local` if you want the contact form to work.
Without the keys it falls back to a honeypot and a rate limit, and the page
tells people to use the mailto link instead.

## Layout

```
src/content/     every word on the site, so rewriting copy touches no JSX
src/app/         routes: /, /work, /work/[slug], /about, /cv
src/components/  the design system: nav, footer, code block, image slots
```

The one rule worth knowing: **components never hold copy**. If you are changing
a sentence, it lives in `src/content`.

## Deploying

Push to `main`. Woodpecker typechecks, builds an image tagged with the commit
SHA, and rewrites the pinned tag in the GitOps repo; Flux rolls the cluster.
Nothing is built locally.

## Elsewhere

- [questpie.com](https://questpie.com) — the framework underneath most of what I ship
- [The full record](https://drepkovsky.com/work)
- [dominik@questpie.com](mailto:dominik@questpie.com)
