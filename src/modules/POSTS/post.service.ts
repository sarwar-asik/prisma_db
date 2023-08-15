import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertToDB = async (data: Post): Promise<Post> => {
  const result = prisma.post.create({
    data,
    include:{
        author:true,
        category:true
    }
  });

  return result;
};


const getPostData =async()=>{
    const result = await prisma.post.findMany({
        
        include:{
            author:true,
            category:true
        }
    })
    return result
}

export const PostServices = { insertToDB,getPostData };
