import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await CategoryService.insertToDB(data);

    res.send({
      success: true,
      message: "Category  created",
      data: result,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: category.controller.ts:8 ~ insertIntoDb ~ error:",
      error
    );
  }
};

export const CategoryController = { insertIntoDb };
