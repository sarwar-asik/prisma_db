import express, { Application } from "express";
import cors from "cors";
import "colors";
import { userROuter } from "./modules/user/user.routes";


const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));





// router //
app.use('/api/v1/user',userROuter)



app.get('/',(req,res)=>{
    res.send({status:true,message:`The Hello Prisma server is running `})
})

export default app