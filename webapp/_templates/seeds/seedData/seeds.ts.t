---
to: prisma/seeds/<%= h.changeCase.lower(modelName) %>/<%= h.changeCase.lower(modelName) %>.ts
---
import { <%= modelName %>, PrismaClient } from '@prisma/client';
import { SeedDataType } from 'prisma/seed';
const prisma = new PrismaClient()
export const <%= h.inflection.inflect(h.changeCase.lower(modelName), 2) %>String = ``;
export const <%= h.inflection.inflect(h.changeCase.lower(modelName), 2) %>: <%= modelName %>[] = JSON.parse(<%= h.inflection.inflect(h.changeCase.lower(modelName), 2) %>String);
export const seedFunc = async() => {
    for (const data of <%= h.changeCase.camel( modelName ) %>s) {
        console.log(data)
        await prisma.<%= h.changeCase.camel( modelName ) %>.create({
          data: data,
        })
      }
}
export const <%= h.inflection.inflect(h.changeCase.lower(modelName), 2) %>Data:SeedDataType = {
    seedFunc:seedFunc,
    relationNumber:<%= relationNumber %>
}