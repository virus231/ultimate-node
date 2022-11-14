FROM node:17.3

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN pnpm build

EXPOSE 8080
CMD [ "pnpm", "start" ]