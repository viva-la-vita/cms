FROM node:16 AS base

# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /app

CMD ["sh", "-c", "npm i && npm run develop --watch-admin"]

FROM base AS api

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["npm", "run", "start"]

FROM api AS build

RUN NODE_ENV=production npm run build

FROM nginx:1.23 AS cms

COPY --from=build /app/build /usr/share/nginx/html
