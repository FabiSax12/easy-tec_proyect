/*
  Warnings:

  - You are about to drop the `Campus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Carrier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Period` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CampusCarriers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CampusSubjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CampusCarriers" DROP CONSTRAINT "_CampusCarriers_A_fkey";

-- DropForeignKey
ALTER TABLE "_CampusCarriers" DROP CONSTRAINT "_CampusCarriers_B_fkey";

-- DropForeignKey
ALTER TABLE "_CampusSubjects" DROP CONSTRAINT "_CampusSubjects_A_fkey";

-- DropForeignKey
ALTER TABLE "_CampusSubjects" DROP CONSTRAINT "_CampusSubjects_B_fkey";

-- DropTable
DROP TABLE "Campus";

-- DropTable
DROP TABLE "Carrier";

-- DropTable
DROP TABLE "Period";

-- DropTable
DROP TABLE "Subject";

-- DropTable
DROP TABLE "_CampusCarriers";

-- DropTable
DROP TABLE "_CampusSubjects";

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
