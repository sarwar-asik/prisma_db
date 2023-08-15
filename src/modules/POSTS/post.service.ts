import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertToDB = async (data: Post): Promise<Post> => {
  const result = prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });

  return result;
};

const getPostData = async (options: any) => {
  console.log(options);
  const { sortBy, sortOrder, searchTerm, page, limit } = options;

  // for pagination ///

  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);

  const takeData = parseInt(limit);

  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      skip,
      take: takeData,
      include: {
        author: true,
        category: true,
      },
      // orderBy:{
      //     // caretedAt:"asc"
      //     [sortBy]:sortOrder
      // }

      // for order and filter //

      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { caretedAt: "desc" },

      // for search

      where: {
        //   title: {
        //     contains: searchTerm,
        //     mode:"insensitive"   //for any capital or small letter ////
        //   },

        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive", //for any capital or small letter ////
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });

    const total = await tx.post.count();

    return { data: result, total };
  });
};

const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

export const PostServices = { insertToDB, getPostData, getSinglePost };
