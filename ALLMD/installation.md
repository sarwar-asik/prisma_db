### set up prisma project :::::

**documentation**

https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql

**step-1** ::::

            npm install typescript ts-node @types/node --save-dev

**step-2** ::::

        npx tsc --init

**step-3** ::::

            npx prisma

**step-4** ::::

            npx prisma init

**step-5** ::::

         set up .env >>>

```env
         DATABASE_URL="postgresql://postgres:password@localhost:5432/hello_prisma?schema=public"
```

**install prisma extension**

**step-5** create model in prisma>scheme.prisma>>> ::::

```sql
        model User {
        id    Int    @id @default(autoincrement())
        emial String
        name  String
        }

```
**step-6 install**

        npx prisma migrate dev --name init

**step-7**

       npm install @prisma/client

**step-8** create function in index.ts ::::

          
 ```ts
    import { PrismaClient } from "@prisma/client";

    const prisma = new PrismaClient();

    async function main(){
            // const getALlUser = await prisma.user.findMany()
            // console.log(getALlUser);

        const postUser =await prisma.user.create({
            data:{
                email:"abc3@email.com",
                name:"abc",
                age:24,
                role:"admin"
            }
        })
        console.log("🚀 ~ file: index.ts:14 ~ main ~ postUser:", postUser)

    }

    main()

 ```

**run the func by**

                npx ts-node index.ts

### after change property in schema.prisma && index.ts :::

        npx prisma generate 

**update property should optional or default values**

        npx prisma migrate dev 



### create api ::::

**install expresss**

                        yarn add express cors
                        npm i --save-dev @types/express



**get data with prisma studio**

            npx prisma studio