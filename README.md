# prisma_db

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

         DATABASE_URL="postgresql://postgres:password@localhost:5432/hello_prisma?schema=public"

**install prisma extension**

**step-5** create model in prisma>scheme.prisma>>> ::::

        model User {
        id    Int    @id @default(autoincrement())
        emial String
        name  String
        }

**step-6 install**

        npx prisma migrate dev --name init
