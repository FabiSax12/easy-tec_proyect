/*
  Warnings:

  - You are about to drop the column `academicPeriodId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `codex` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `period` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the `AcademicPeriod` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `code` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodCode` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AcademicPeriod" DROP CONSTRAINT "AcademicPeriod_userId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_academicPeriodId_fkey";

-- AlterTable

ALTER TABLE "Course" ADD COLUMN "code" TEXT NOT NULL DEFAULT 'TEMP_CODE';
ALTER TABLE "Course" ADD COLUMN "periodCode" TEXT NOT NULL DEFAULT 'TEMP_PERIOD';
ALTER TABLE "Course" ADD COLUMN "periodId" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "Period" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

UPDATE "Course" SET "code" = "codex";
UPDATE "Course" SET "periodCode" = "period";
UPDATE "Course" SET "periodId" = (
  SELECT "id" FROM "Period" WHERE "typeId" = "academicPeriodId"
);

ALTER TABLE "Course" DROP COLUMN "academicPeriodId",
DROP COLUMN "codex",
DROP COLUMN "period";

ALTER TABLE "Course" ALTER COLUMN "code" DROP DEFAULT;
ALTER TABLE "Course" ALTER COLUMN "periodCode" DROP DEFAULT;
ALTER TABLE "Course" ALTER COLUMN "periodId" DROP DEFAULT;

-- CreateTable
CREATE TABLE "_UserPeriods" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserPeriods_AB_unique" ON "_UserPeriods"("A", "B");

-- CreateIndex
CREATE INDEX "_UserPeriods_B_index" ON "_UserPeriods"("B");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserPeriods" ADD CONSTRAINT "_UserPeriods_A_fkey" FOREIGN KEY ("A") REFERENCES "Period"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserPeriods" ADD CONSTRAINT "_UserPeriods_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- DropTable
DROP TABLE "AcademicPeriod";
