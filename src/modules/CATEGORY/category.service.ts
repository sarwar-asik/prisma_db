import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertToDB = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};
const getDCategory = async () => {
  const result = await prisma.category.findMany()
  return result;
};

export const CategoryService = { insertToDB ,getDCategory};
