FROM node:18-alpine AS build

WORKDIR /app

COPY ./backend-project .


RUN yarn install


RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:prod"]
