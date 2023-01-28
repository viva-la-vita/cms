FROM node:16 AS base

# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /app

CMD ["sh", "-c", "npm i && npm run build && npm run develop --watch-admin"]

FROM base AS api

COPY package*.json ./

RUN npm ci

COPY . .

RUN NODE_ENV=production npm run build

CMD ["npm", "start"]
