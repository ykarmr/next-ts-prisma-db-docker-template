import { Post,User } from '@prisma/client';
export type sampleCastUser = User & {
    posts?: Post[]
}