FROM node:current-alpine3.10 AS build
RUN apk add --no-cache git python make g++
RUN git clone https://github.com/BrunnerLivio/agile-ipsum.git
WORKDIR /agile-ipsum

RUN npm install
RUN npm run build


FROM nginx
COPY --from=build /agile-ipsum/public/ /var/www/agile-ipsum/

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

