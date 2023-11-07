FROM node:18.15.0-alpine

EXPOSE 3000

WORKDIR /app

COPY package*.json  .

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "serve"]