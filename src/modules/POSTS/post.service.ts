import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertToDB = async (data: Post): Promise<Post> => {
  const result = prisma.post.create({
    data,
  });

  return result;
};

export const PostServices = { insertToDB };
