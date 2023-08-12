import express, { Application } from "express";
import cors from "cors";
import "colors";


const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


export default app