#### aggregation and grouping ::::

**explore the documentation***

https://www.prisma.io/docs/concepts/components/prisma-client/aggregation-grouping-summarizing


```ts
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


    /// grouping /////

    const result = await prisma.post.groupBy({
        by:['title'],
        _count:{
            title:true,
            categoryId:true
        }
    })

    return result;
    };
    
```