## query ,filter,sort,search data,pagination ::::::

#### include the relation data :::

    const result = await prisma.post.findMany({
        include: {
        author: true,
        category: true,
        }
    })

#### sort and order in data

    const result = await prisma.post.findMany({
        orderBy:{
                // caretedAt:"asc"
                [sortBy]:sortOrder
            }
        })

**or order\***
orderBy:
sortBy && sortOrder?{
[sortBy]: sortOrder,
}:{ caretedAt: "desc" }

### search by title or author

**system-1**

    const result = await prisma.post.findMany({
          where:{
              title: {
              contains: searchTerm,
              mode:"insensitive"   //for any capital or small letter ////
             }
          }
        })

**system-2 for search by multiple property**

    const result = await prisma.post.findMany({
         where: {
     OR:[

        {
            title: {
                contains: searchTerm,
                mode:"insensitive"   //for any capital or small letter ////
              },
        },
        {
            author:{
                name:{
                    contains:searchTerm,
                    mode:"insensitive"
                }
            }
        }
     ]
    },
    })

### pagination ::::

    const skip = parseInt(limit) * parseInt(page) - parseInt(limit);

    const takeData = parseInt(limit);

    const result = await prisma.post.findMany({
        skip,
        take:takeData

    })


### transaction role back with prisma ::::

    const getPostData = async (options: any) => {

    return await prisma.$transaction(async(tx)=>{
        ////// return variable is here ::::
        const result = await tx.post.findMany({})   ////first session
        const total = await tx.post.count();    //// second session 

         return { data: result, total };
     })
    }