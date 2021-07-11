import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, User } from '@prisma/client'
import { useRouter } from 'next/router'

const prisma = new PrismaClient()

// type Data = User[];

export const Sample = async (req: NextApiRequest,res: NextApiResponse) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  res.status(200).json(users)
}

export default Sample