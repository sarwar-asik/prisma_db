import express from "express"
import { PostController } from "./post.controller"

const router = express.Router()

router.post('/create-post',PostController.insertIntoDb)


export const postRouter = router