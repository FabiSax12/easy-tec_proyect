/*
  Warnings:

  - You are about to drop the column `academicPeriodId` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_academicPeriodId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "academicPeriodId";
