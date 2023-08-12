import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient();

const port = process.env.PORT || 3003;

async function main() {
  app.listen(port, () => {
    console.log(`server is running on ${port}`.red.underline.bold);
  });
}

main();
