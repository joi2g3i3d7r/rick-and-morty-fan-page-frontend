FROM node:18.15.0-alpine3.17 as builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.21.3-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# FROM base as final
# WORKDIR /app
# COPY --from=builder /app/dist .
# RUN npm install -g http-server
# EXPOSE 8080
# CMD ["http-server", "-p", "8080", "-g", "-c-1", "."]
