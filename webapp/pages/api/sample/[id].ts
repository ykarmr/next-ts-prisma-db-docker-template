import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, User } from '@prisma/client'
import { useRouter } from 'next/router'

const prisma = new PrismaClient()

// type Data = User[];

export const SampleId = async (req: NextApiRequest,res: NextApiResponse) => {
  const { id } = req.query
  const users = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      posts: true,
    },
  })
  res.status(200).json(users)
}

export default SampleId