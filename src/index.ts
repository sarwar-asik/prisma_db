import { PrismaClient } from "@prisma/client";
import app from "./app";



const port = process.env.PORT || 5000;

async function main() {
  app.listen(port, () => {
    console.log(`server is running on ${port}`.red.underline.bold);
  });


}


main();
