FROM node:16-alpine

WORKDIR /backend

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "dev"]
