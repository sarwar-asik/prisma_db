
**step-1** create model in prisma>scheme.prisma>>> ::::
```sql


        generator client {
        provider = "prisma-client-js"
        }

        datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
        }

        model User {
        id    Int    @id @default(autoincrement())
        email String @unique
        name  String
        age   Int
        role  String
        }

        model Profile {
        id     Int    @id @default(autoincrement())
        bio    String
        userId Int
        }

        model Category {
        id   Int    @id @default(autoincrement())
        name String
        }

        model Post {
        id         Int      @id @default(autoincrement())
        title      String
        authorID   Int
        categoryId Int
        caretedAt  DateTime @default(now())
        updatedAt  DateTime @updatedAt
        }


```

**step-2** create function in index.ts ::::

```sql

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



### relation between 2 model(user & profile) in prisma>schema.prisma >>>

**user model**
```sql

        model User {
            id      Int      @id @default(autoincrement())
            email   String   @unique
            name    String
            age     Int
            role    String
            profile Profile?

            @@map("users")
        }


```
**profile model**

```sql

        model Profile {
            id     Int    @id @default(autoincrement())
            bio    String
            userId Int @unique
            user   User   @relation(fields: [userId], references: [id])
            @@map("profiles")
        }
```

### relation between 3 model(user & profile & category) in prisma>schema.prisma >>>

**post model**

 ```sql
 
        model Post {
            id         Int      @id @default(autoincrement())
            title      String
            authorID   Int
            author     User     @relation(fields: [authorID], references: [id])
            categoryId Int
            category   Category @relation(fields: [categoryId], references: [id])
            caretedAt  DateTime @default(now())
            updatedAt  DateTime @updatedAt

            @@map("posts")
        }

 ```
**category model**

```sql
            model Category {
            id   Int    @id @default(autoincrement())
            name String
            posts Post[]
            @@map("categories")
            }
```
**user model**

```sql
        model User {
                id      Int      @id @default(autoincrement())
                email   String   @unique
                name    String
                age     Int
                role    String
                profile Profile?
                posts   Post[]

                @@map("users")
        }
```