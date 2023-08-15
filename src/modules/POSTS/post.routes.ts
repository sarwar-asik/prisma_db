import express from "express"
import { PostController } from "./post.controller"

const router = express.Router()

router.post('/create-post',PostController.insertIntoDb)
router.get('/',PostController.getPostData)


export const postRouter = router


// {
//     "title": "Sample Post Title 6",
//     "authorId": 6,
//     "categoryId":2
//   }