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

const getAllPostData = async (req: Request, res: Response) => {
  try {

    const result = await PostServices.getPostAllData();
    res.send({
      success: true,
      message: "all post data get successfully",
      total: result?.total,
      data: result?.data,
    });
  } catch (error) {
    res.send(error);
  }
};
const getPostPaginationData = async (req: Request, res: Response) => {
  try {
    const options = req?.query;
    const result = await PostServices.getPostPaginationData(options);
    res.send({
      success: true,
      message: "post filter data get successfully",
      total: result?.total,
      data: result?.data,
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
      message: ` post id = ${id} data get successfully`,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const updatePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req?.params?.id);
    const data = req?.body;

    const result = await PostServices.updatePost(id, data);
    res.send({
      success: true,
      message: ` post id = ${id} data update successfully`,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req?.params?.id);


    const result = await PostServices.deletePost(id);
    res.send({
      success: true,
      message: ` post id = ${id} data delete successfully`,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const aggregateAndGroupPost = async (req: Request, res: Response) => {
  try {
    

    const result = await PostServices.aggregateAndGroupingPost()
    res.send({
      success: true,
      message: `aggregate post data successfully`,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  insertIntoDb,
  getAllPostData,
  getSinglePostData,
  updatePost,
  getPostPaginationData,
  deletePost,
  aggregateAndGroupPost
};
