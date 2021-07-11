import { postsData } from './seeds/sample/post/post'
import { usersData } from './seeds/sample/user/user'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type SeedDataType = {
  seedFunc: () => Promise<void>
  relationNumber: number
}

const seedDataArr: SeedDataType[] = [
  /* サンプル */
  usersData,
  postsData,
  /* ------ */
]

async function main() {
  const relationNumber1Data = seedDataArr.filter(
    (item) => item.relationNumber === 1
  )
  for (const item of relationNumber1Data) {
    await item.seedFunc()
  }

  const relationNumber2Data = seedDataArr.filter(
    (item) => item.relationNumber === 2
  )
  for (const item of relationNumber2Data) {
    await item.seedFunc()
  }

  const relationNumber3Data = seedDataArr.filter(
    (item) => item.relationNumber === 3
  )
  for (const item of relationNumber3Data) {
    await item.seedFunc()
  }
  console.log('finish ctrl＋C で停止してください')
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
