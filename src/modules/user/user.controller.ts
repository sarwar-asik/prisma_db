import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const userData = req?.body;
    console.log(
      "🚀 ~ file: user.controller.ts:8 ~ insertIntoDB ~ userData:",
      userData
    );

    const result = await UserService.insertIntoDBService(userData);
    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: user.controller.ts:18 ~ insertIntoDB ~ error:",
      error
    );
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const userData = req?.body;

    const result = await UserService.insertOrUpdateProfile(userData);
    res.send({
      success: true,
      message: "Profile update successfully",
      data: result,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: user.controller.ts:40 ~ insertOrUpdateProfile ~ error:",
      error
    );

    res.send(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUserData();
    res.send({
      success: true,
      message: "user data get successfully",
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ file: user.controller.ts:50 ~ getUser ~ error:", error);
    res.send(error);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req?.params?.id);

    const result = await UserService.getSingleUser(id);
    res.send({
      success: true,
      message: "user data get successfully",
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ file: user.controller.ts:50 ~ getUser ~ error:", error);
    res.send(error);
  }
};

export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUser,
  getSingleUser,
};
