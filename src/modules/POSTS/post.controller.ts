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

const getPostData = async (req: Request, res: Response) => {
  try {
    const options = req?.query
    const result = await PostServices.getPostData(options);
    res.send({
      success: true,
      message: "post data get successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSinglePostData = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req?.params?.id);

    const result = await PostServices.getSinglePost(id);
    res.send({
      success: true,
      message: `${id} post data get successfully`,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = { insertIntoDb, getPostData,getSinglePostData };
