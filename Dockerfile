# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

# Vite inlines VITE_* env vars at build time. Coolify passes them via --build-arg.
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ARG VITE_SUPABASE_PROJECT_ID
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL \
    VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY \
    VITE_SUPABASE_PROJECT_ID=$VITE_SUPABASE_PROJECT_ID

# Use Bun lockfile for faster, reproducible installs on Coolify
COPY package.json bun.lock ./
RUN npm install -g bun && bun install --frozen-lockfile

COPY . .
RUN bun run vercel-build

# ---- Runtime stage ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]