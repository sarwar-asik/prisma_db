import { Request, Response } from "express";
import { PostServices } from "./post.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await PostServices.insertToDB(data);

    res.send({
      success: true,
      message: "Post  created",
      data: result,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: post.controller.ts:17 ~ insertIntoDb ~ error:",
      error
    );
  }
};

export const PostController = { insertIntoDb };
