Credits at [Styuk](https://github.com/stuyk) and [MyHwu9508](https://github.com/MyHwu9508) for the compiler scripts

Steps:

1. Run `npm i` (pnpm and yarn also work)
2. Run `cd ./src-webviews && npm i` (pnpm and yarn also work)
3. Run `cd ..`
4. Run `npm run prisma:generate`
5. Copy `.env-example` to `.env` and fill your connection URL in. look at [prisma docs](https://www.prisma.io/docs/orm/reference/connection-urls) for more infomation
6. Run `npm run prisma:push`
7. Run `npm run webview:dev`
8. Run `npm run linux` or `npm run windows`