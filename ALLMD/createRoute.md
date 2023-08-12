
**install expresss**

                        yarn add express cors
                        npm i --save-dev @types/express
                        npm i --save-dev @types/cors


**cut the index.ts to src>index.ts**

#### change rootDir in tsconfig.json ::::

              "rootDir": "./src", 


### add start in package.json:::
             "start": "nodemon ./src/index.ts",


### src>index.ts (create a server) ::::

    import { PrismaClient } from "@prisma/client";
    import express, { Application } from "express";
    import cors from "cors";
    import "colors";
    const prisma = new PrismaClient();

    const app: Application = express();

        // middleware
        app.use(express.json());
        app.use(cors());
        app.use(express.urlencoded({ extended: true }));

        const port = process.env.PORT || 3003;

    async function main() {
        app.listen(port, () => {
            console.log(`server is running on ${port}`.red.underline.bold);
        });
    }

    main();
