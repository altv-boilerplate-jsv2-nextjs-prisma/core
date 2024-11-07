# Project Setup Instructions

### Credits
Special thanks to [Styuk](https://github.com/stuyk) and [MyHwu9508](https://github.com/MyHwu9508) for the compiler scripts.

### Important Note:
- If you're running the webview outside of the AltV server directory, ensure that you **pull the Prisma folder** first to avoid missing dependencies.

---

## Setup Steps

1. **Install Dependencies**

   Run the following command to install project dependencies:

   ```bash
   npm install
   ```

   (You can also use `pnpm` or `yarn` if preferred.)

2. **Install Webview Dependencies**

   Navigate to the `src-webviews` directory and install the necessary dependencies:

   ```bash
   cd ./src-webviews
   npm install
   ```

   (Again, `pnpm` and `yarn` are also supported.)

3. **Navigate Back to the Root Directory**

   Go back to the project root directory:

   ```bash
   cd ..
   ```

4. **Generate Prisma Client**

   Run the Prisma client generation command:

   ```bash
   npm run prisma:generate
   ```

5. **Configure Environment Variables**

   Copy the `.env-example` file to `.env`:

   ```bash
   cp .env-example .env
   ```

   Then, open the `.env` file and add your database connection URL. For more details on the connection URL format, refer to the [Prisma documentation](https://www.prisma.io/docs/orm/reference/connection-urls).

6. **Push Prisma Schema**

   Apply your Prisma schema to the database:

   ```bash
   npm run prisma:push
   ```

7. **Start the Webview in Development Mode**

   Run the webview in development mode:

   ```bash
   npm run webview:dev
   ```

8. **Build for Your Platform**

   Finally, build the application for your platform:

   - For Linux:
     ```bash
     npm run linux
     ```

   - For Windows:
     ```bash
     npm run windows
     ```

---

## Additional Notes
- Make sure you have the necessary environment and tools installed to run the project, such as Node.js, Prisma, and a compatible database.
- You can use `pnpm` or `yarn` as alternatives to `npm` for managing dependencies if you prefer.
