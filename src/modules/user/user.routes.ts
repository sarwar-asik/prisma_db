import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post('/create-user',UserController.insertIntoDB);


// router.get("/", (req, res) => {
//   res.send({ success: true, message: "from user router" });
// });
export const userROuter = router;
