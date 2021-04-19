FROM mhart/alpine-node:12

# Create app directory
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci --prod

COPY src src
COPY static static
COPY __sapper__ __sapper__

RUN ls src

ENV PORT=3111

EXPOSE 3111

CMD ["node", "__sapper__/build"]