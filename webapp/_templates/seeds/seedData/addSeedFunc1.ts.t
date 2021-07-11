---
to: prisma/seed.ts
inject: true
after: "import { PrismaClient } from '@prisma/client';"
---
import { <%= h.inflection.inflect(h.changeCase.lower(modelName), 2) %>Data } from "./seeds/<%= h.changeCase.lower(modelName) %>/<%= h.changeCase.lower(modelName) %>";