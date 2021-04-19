FROM node:14

# Create app directory
WORKDIR /app

COPY ./ ./

RUN npm install
RUN npm run build

ENV PORT=3111

EXPOSE 3111

CMD [ "node", "__sapper__/build" ]