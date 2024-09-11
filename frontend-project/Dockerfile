FROM node:20-alpine as build

WORKDIR /app

COPY ./frontend-project .

RUN CI=false yarn install

ARG VITE_APP_ARG_VAR
ENV VITE_APP_ARG_VAR $ARG_VAR

RUN CI=false yarn build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
