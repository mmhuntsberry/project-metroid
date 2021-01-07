FROM node:14-alpine

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node yarn.lock package.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

ENTRYPOINT [ "npm", "run" ]

# production env
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]