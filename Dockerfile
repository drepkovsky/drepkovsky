# syntax=docker/dockerfile:1
FROM oven/bun:1.4-alpine AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM node:24-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.28-alpine AS runner
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1
