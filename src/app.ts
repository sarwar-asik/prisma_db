import express, { Application } from "express";
import cors from "cors";
import "colors";
import { userROuter } from "./modules/USER/user.routes";
import { categoryRouter } from "./modules/CATEGORY/category.routes";
import { postRouter } from "./modules/POSTS/post.routes";

const app: Application = express();

// middleware

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// router //
app.use("/api/v1/user", userROuter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/post", postRouter);

app.get("/", (req, res) => {
  res.send({ status: true, message: `The Hello Prisma server is running ` });
});

export default app;
