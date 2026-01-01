# TypeScript Project Setup

- Steps required to set up a basic TypeScript project.

## Installation steps

1. Move to the folder where you want to create the TypeScript project.

2. Initialize the project using npm:

   ```bash
   npm init -y

   ```

3. Install TypeScript as a development dependency:

   ```bash
   npm install -D typescript
   ```

4. Initialize the TypeScript configuration:
   It adds tsconfig.json

   ```bash
   npx tsc --init
   ```

5. Compile the TypeScript files:

   ```bash
   npx tsc
   ```

6. Add the below into package.json under scripts, before that create an index.ts inside src

   ```
    "start": "node dist/index.js",
    "dev": "npx tsc",
   ```

   now use the below command to compile-

   ```bash
   npm run dev
   ```

   and to run the file-

   ```bash
   npm run start
   ```
