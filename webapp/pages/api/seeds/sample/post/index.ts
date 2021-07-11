import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Post } from '@prisma/client'

const prisma = new PrismaClient()

type Data = Post[];

export const getPost = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const posts = await prisma.post.findMany({});

    res.status(200).json(posts);
}


export default getPost;
