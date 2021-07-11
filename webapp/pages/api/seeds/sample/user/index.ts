import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

type Data = User[];

export const getUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const users = await prisma.user.findMany({});

    res.status(200).json(users);
}


export default getUser;
