-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "emial" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
