import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
        const getALlUser = await prisma.user.findMany()
        console.log(getALlUser);
        
        // const postUser =await prisma.user.create({
        //     data:{
        //         email:"abc2@email.com",
        //         name:"abc"
        //     }
        // })
        // console.log("🚀 ~ file: index.ts:14 ~ main ~ postUser:", postUser)

}

main()