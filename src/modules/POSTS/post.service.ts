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

const getPostAllData = async () => {
  const result = await prisma.post.findMany();
  const total = await prisma.post.count();
  return {
    data: result,
    total,
  };
};

const getPostPaginationData = async (options: any) => {
  console.log(options);
  const { sortBy, sortOrder, searchTerm, page, limit } = options;

  // for pagination ///

  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;

  const takeData = parseInt(limit) || 0;

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

const updatePost = async (
  id: number,
  payload: Partial<Post >
): Promise<Post | number> => {
    const result = prisma.post.update({
      where: {
        id,
      },
      data: payload,
    });

//raw postgresSQL ///

//   const result = await prisma.$executeRaw`
//     UPDATE posts
//     SET title = ${payload.title}
//     WHERE
//     id = ${id}
// `;

  return result;
};

const deletePost = async (id: number): Promise<Post> => {
  const result = prisma.post.delete({
    where: {
      id,
    },
  });

  return result;
};

const aggregateAndGroupingPost = async () => {
  // for aggregate ///

  //  const result = await prisma.post.aggregate({
  //     _avg:{
  //         authorId:true
  //     },
  //     _count:{
  //         authorId:true,
  //         categoryId:true,
  //     },
  //     _sum:{
  //         authorId:true
  //     }
  //  })

  const result = await prisma.post.groupBy({
    by: ["title"],
    _count: {
      title: true,
      categoryId: true,
    },
  });

  return result;
};

export const PostServices = {
  insertToDB,
  getPostPaginationData,
  getSinglePost,
  updatePost,
  getPostAllData,
  deletePost,
  aggregateAndGroupingPost,
};
