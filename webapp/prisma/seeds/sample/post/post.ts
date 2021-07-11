import { Post, PrismaClient } from '@prisma/client';
import { SeedDataType } from 'prisma/seed';
const prisma = new PrismaClient()
export const postsString = `[{"authorId":1,"content":null,"id":1,"published":false,"title":"post1"},{"authorId":2,"content":null,"id":2,"published":false,"title":"post2"}]`;
export const posts: Post[] = JSON.parse(postsString);
export const seedFunc = async() => {
    for (const data of posts) {
        console.log(data)
        await prisma.post.create({
          data: data,
        })
      }
}
export const postsData:SeedDataType = {
    seedFunc:seedFunc,
    relationNumber:2
}