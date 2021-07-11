---
to: pages/api/seeds/<%= h.changeCase.lower( modelName ) %>/index.ts
---
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, <%= modelName %> } from '@prisma/client'

const prisma = new PrismaClient()

type Data = <%= modelName %>[];

export const get<%= modelName %> = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const <%= h.inflection.inflect(h.changeCase.lower(modelName), 2) %> = await prisma.<%= h.changeCase.lower( modelName ) %>.findMany({});

    res.status(200).json(<%= h.inflection.inflect(h.changeCase.lower(modelName), 2) %>);
}


export default get<%= modelName %>;
