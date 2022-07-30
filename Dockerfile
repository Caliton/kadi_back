FROM node:14-alpine as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install glob rimraf
RUN npm install --only=development
RUN apk add --no-cache bash
COPY . .
RUN npm run build




FROM node:14-alpine as production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
RUN apk add --no-cache bash
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/main"]