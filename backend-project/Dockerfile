FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

EXPOSE 3000

CMD ["yarn", "start:prod"]
