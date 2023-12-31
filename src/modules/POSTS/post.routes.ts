import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.insertIntoDb);
router.get("/", PostController.getAllPostData);
router.get("/filter", PostController.getPostPaginationData);
router.get("/aggregate-grouping", PostController.aggregateAndGroupPost);
router.get("/:id", PostController.getSinglePostData);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

export const postRouter = router;


// {
//     "title": "Sample Post Title 6",
//     "authorId": 6,
//     "categoryId":2
//   }
