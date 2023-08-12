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

export const UserController = { insertIntoDB };
