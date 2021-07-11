---
to: prisma/seed.ts
inject: true
after: "const seedDataArr: SeedDataType"
---
  <%= h.inflection.inflect(h.changeCase.lower(modelName), 2) %>Data,