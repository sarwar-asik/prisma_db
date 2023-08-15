import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();

router.post("/create-category", CategoryController.insertIntoDb);
router.get("/", CategoryController.getCategory);

export const categoryRouter = router;



// {
//     "name":"Application Development"
// }