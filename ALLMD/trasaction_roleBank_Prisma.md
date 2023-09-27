### transaction role back with prisma ::::

```ts
    const getPostData = async (options: any) => {

    return await prisma.$transaction(async(tx)=>{
        ////// return variable is here ::::
        const result = await tx.post.findMany({})   ////first session
        const total = await tx.post.count();    //// second session 

         return { data: result, total };
     })
    }
```
