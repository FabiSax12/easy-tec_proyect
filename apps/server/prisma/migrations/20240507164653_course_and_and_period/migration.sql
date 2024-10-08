/*
  Warnings:

  - The primary key for the `AcademicPeriod` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `title` on the `AcademicPeriod` table. All the data in the column will be lost.
  - The `id` column on the `AcademicPeriod` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `type` to the `AcademicPeriod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `AcademicPeriod` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `AcademicPeriod` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `codex` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `period` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `academicPeriodId` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "AcademicPeriod" DROP CONSTRAINT "AcademicPeriod_userId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_academicPeriodId_fkey";

-- AlterTable
ALTER TABLE "AcademicPeriod" DROP CONSTRAINT "AcademicPeriod_pkey",
DROP COLUMN "title",
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "typeId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ADD CONSTRAINT "AcademicPeriod_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "codex" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "period" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "state" DROP DEFAULT,
DROP COLUMN "academicPeriodId",
ADD COLUMN     "academicPeriodId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "AcademicPeriod" ADD CONSTRAINT "AcademicPeriod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_academicPeriodId_fkey" FOREIGN KEY ("academicPeriodId") REFERENCES "AcademicPeriod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
