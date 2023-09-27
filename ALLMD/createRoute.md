**install expresss**

                        yarn add express cors
                        npm i --save-dev @types/express
                        npm i --save-dev @types/cors

**cut the index.ts to src>index.ts**

#### change rootDir in tsconfig.json ::::

```json
              "rootDir": "./src",
```

### add start in package.json:::

```json
             "start": "nodemon ./src/index.ts",
```

### src>index.ts (create a server) ::::

```ts
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

```
#### ** or ** create app.ts & index.ts ::::

**app.ts**

```ts

        import express, { Application } from "express";
        import cors from "cors";
        import "colors";


        const app: Application = express();

        // middleware
        app.use(express.json());
        app.use(cors());
        app.use(express.urlencoded({ extended: true }));


        export default app
```

**index.ts**

```ts
            import { PrismaClient } from "@prisma/client";
            import app from "./app";

            const prisma = new PrismaClient();

            const port = process.env.PORT || 3003;

            async function main() {
            app.listen(port, () => {
                console.log(`server is running on ${port}`.red.underline.bold);
            });
            }

            main();
```

## Create api:::::

http://localhost:5000/api/v1/user/create-user/  (POST)

### src>app.ts :::::

```ts
        app.use('/api/v1/user',userROuter)
```

#### create src>modules>user.router.ts::::


```ts
   import express from "express";
    import { UserController } from "./user.controller";
    const router = express.Router();

    router.post('/create-user',UserController.insertIntoDB);


    // router.get("/", (req, res) => {
    //   res.send({ success: true, message: "from user router" });
    // });
    export const userROuter = router;

```
#### create src>modules>user.controller.ts::::

```ts

        import { Request, Response } from "express";
        import { UserService } from "./user.service";

        const insertIntoDB = async (req: Request, res: Response) => {
        try {
            const userData = req?.body;
            console.log(
            "🚀 ~ file: user.controller.ts:8 ~ insertIntoDB ~ userData:",
            userData
            );

            const result = await UserService.insertIntoDBService(userData);
            res.send({
            success: true,
            message: "User created successfully",
            data: result,
            });
        } catch (error) {
            console.log(
            "🚀 ~ file: user.controller.ts:18 ~ insertIntoDB ~ error:",
            error
            );
            res.send(error);
        }
        };

        export const UserController = { insertIntoDB };

```
#### create src>modules>user.service.ts::::

```ts
    import { PrismaClient, User } from "@prisma/client";


    const prisma = new PrismaClient();

    const insertIntoDBService = async(data:User):Promise<User>=>{
        const result = await prisma.user.create({
            data
        })
        console.log("🚀 ~ file: user.service.ts:10 ~ insertIntoDBService ~ result:", result)

        return result

    }

    export const UserService ={
        insertIntoDBService
    }
```


**get data with prisma studio**

            npx prisma studio