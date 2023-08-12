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