import { User, PrismaClient } from '@prisma/client';
import { SeedDataType } from 'prisma/seed';
const prisma = new PrismaClient()
export const usersString = `[{"email":"a@gmail.com","id":1,"name":"name1"},{"email":"b@gmail.com","id":2,"name":"name2"}]`;
export const users: User[] = JSON.parse(usersString);
export const seedFunc = async() => {
    for (const data of users) {
        console.log(data)
        await prisma.user.create({
          data: data,
        })
      }
}
export const usersData:SeedDataType = {
    seedFunc:seedFunc,
    relationNumber:1
}