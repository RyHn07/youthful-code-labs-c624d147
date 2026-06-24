# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

# Install bun (project uses bun.lockb if present; npm also works)
COPY package.json package-lock.json* bun.lockb* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run vercel-build

# ---- Runtime stage ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]