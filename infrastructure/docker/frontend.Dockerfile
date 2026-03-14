# Build React
FROM node:22-alpine AS build

# Update Alpine packages to reduce vulnerabilities
RUN apk update && apk upgrade

WORKDIR /app
COPY ../../frontend/package*.json .
RUN npm install

COPY ../../frontend/* ./
RUN npm run build