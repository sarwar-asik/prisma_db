### raw postgress code in Prisma :::

**follow the documentation**

        https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access

#### query data with raw PostgresSQL ($queryRaw) ::::

    const getUserData =async()=>{


        const result = await prisma.$queryRaw`
        select * from users

        `
        return result
    }

#### update data with raw PostgresSQL ($executeRaw) ::::

        const updatePost = async (
        id: number,
        payload: Partial<Post >
        ): Promise<Post | number> => {
            //   const result = prisma.post.update({
            //     where: {
            //       id,
            //     },
            //     data: payload,
            //   });

            const result = await prisma.$executeRaw`
                UPDATE posts
                SET title = ${payload.title}
                WHERE
                id = ${id}
            `;

            return result;
        };
