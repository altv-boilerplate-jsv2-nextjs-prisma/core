FROM node:22

RUN corepack enable

RUN apt-get update -y
RUN apt-get install -y curl libatomic1 libc-bin wget apt-transport-https ca-certificates gnupg
RUN apt autoremove -y
RUN apt-get clean

WORKDIR /usr/src/app
COPY package*.json ./
RUN pnpm i
COPY . .
RUN pnpm run update
RUN pnpm run prisma:push
RUN pnpm run build

RUN chmod +x altv-server
RUN chmod +x altv-crash-handler

EXPOSE 7788/udp
EXPOSE 7788/tcp

CMD [ "pnpm", "run", "linux:start" ]