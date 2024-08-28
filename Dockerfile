# Etapa de build
FROM node:18-alpine3.19 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

# Etapa final
FROM node:18-alpine3.19

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

EXPOSE 3000

CMD [ "npm", "run", "start" ]