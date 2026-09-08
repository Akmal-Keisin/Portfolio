FROM oven/bun:1.4 AS base
WORKDIR /app

COPY package.json bun.lock ./

FROM base AS build-deps
RUN bun install --frozen-lockfile

FROM build-deps AS build
COPY . .
RUN bun run build

FROM base AS runtime
RUN bun install --frozen-lockfile --omit=dev
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["bun", "./dist/server/entry.mjs"]
