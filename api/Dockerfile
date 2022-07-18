FROM node:18.4.0
WORKDIR /usr/src/app
COPY package*.json .
COPY app.js .
RUN npm install

USER node
CMD [ "npm", "start" ]