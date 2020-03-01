FROM node:12-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV=production \
  REACT_APP_BASE_URL=https://api.github.com/

COPY package.json yarn.lock /usr/src/app/
RUN yarn install --production=false &&\
  chown -R node:node /usr/src/app

COPY . /usr/src/app
RUN yarn run build

USER node

CMD ["yarn", "start:prod"]
