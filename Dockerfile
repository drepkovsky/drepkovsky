# syntax=docker/dockerfile:1

# ---- deps -------------------------------------------------------------------
FROM oven/bun:1.3-alpine AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ---- build ------------------------------------------------------------------
FROM oven/bun:1.3-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* is inlined at build time, so the site key has to be here rather
# than in the runtime env. It is public by design — it ships in the page HTML.
ARG NEXT_PUBLIC_CAP_SITE_KEY
ARG NEXT_PUBLIC_CAP_BASE_URL
ARG NEXT_PUBLIC_UMAMI_SRC
ARG NEXT_PUBLIC_UMAMI_ID
ENV NEXT_PUBLIC_CAP_SITE_KEY=$NEXT_PUBLIC_CAP_SITE_KEY \
    NEXT_PUBLIC_CAP_BASE_URL=$NEXT_PUBLIC_CAP_BASE_URL \
    NEXT_PUBLIC_UMAMI_SRC=$NEXT_PUBLIC_UMAMI_SRC \
    NEXT_PUBLIC_UMAMI_ID=$NEXT_PUBLIC_UMAMI_ID \
    NEXT_TELEMETRY_DISABLED=1

RUN bun run build

# ---- runtime ----------------------------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# `standalone` already contains the pruned node_modules and the server; static
# and public are the two things it deliberately leaves out.
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

# Hits a real page rather than /, so a broken render fails the probe instead of
# passing on a 200 from an error boundary.
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s \
  CMD node -e "fetch('http://127.0.0.1:3000/work').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
