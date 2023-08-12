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