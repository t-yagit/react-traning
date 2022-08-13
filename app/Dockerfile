FROM node:18.4.0
WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install && \
    mkdir node_modules/.cache && \
    chmod -R 777 node_modules/.cache
# USER node

CMD ["npm", "start"]