/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `periodCode` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `teacher` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Course` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `credits` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - The `state` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `code` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to drop the column `code` on the `Period` table. All the data in the column will be lost.
  - You are about to alter the column `number` on the `Period` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `year` on the `Period` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to drop the column `createdAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Task` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `description` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `carrier` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `lastname` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to drop the `_UserPeriods` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[type,number,year]` on the table `Period` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `type` on the `Period` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `endDate` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PeriodType" AS ENUM ('S', 'V');

-- CreateEnum
CREATE TYPE "CourseState" AS ENUM ('PENDING', 'COURSING', 'FINISHED');

-- DropForeignKey
ALTER TABLE "_UserPeriods" DROP CONSTRAINT "_UserPeriods_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserPeriods" DROP CONSTRAINT "_UserPeriods_B_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "createdAt",
DROP COLUMN "periodCode",
DROP COLUMN "teacher",
DROP COLUMN "updatedAt",
ADD COLUMN     "teacherId" INTEGER,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "credits" SET DATA TYPE SMALLINT,
DROP COLUMN "state",
ADD COLUMN     "state" "CourseState" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "code" SET DATA TYPE VARCHAR(10);

-- AlterTable
ALTER TABLE "Period" DROP COLUMN "code",
DROP COLUMN "type",
ADD COLUMN     "type" "PeriodType" NOT NULL,
ALTER COLUMN "startDate" SET DATA TYPE DATE,
ALTER COLUMN "endDate" SET DATA TYPE DATE,
ALTER COLUMN "number" SET DATA TYPE SMALLINT,
ALTER COLUMN "year" SET DATA TYPE SMALLINT;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "createdAt",
DROP COLUMN "date",
DROP COLUMN "state",
DROP COLUMN "updatedAt",
ADD COLUMN     "endDate" TIMESTAMP(0) NOT NULL,
ADD COLUMN     "percentage" SMALLINT NOT NULL DEFAULT 0,
ADD COLUMN     "stateId" SMALLINT NOT NULL DEFAULT 1,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "carrier",
DROP COLUMN "updatedAt",
ADD COLUMN     "majorId" SMALLINT,
ADD COLUMN     "roleId" SMALLINT NOT NULL DEFAULT 1,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "lastname" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "createdAt" DROP DEFAULT,
ALTER COLUMN "createdAt" SET DATA TYPE DATE,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(15);

-- DropTable
DROP TABLE "_UserPeriods";

-- CreateTable
CREATE TABLE "Major" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(5) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPeriod" (
    "id" SERIAL NOT NULL,
    "enrollmentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,

    CONSTRAINT "UserPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskState" (
    "id" SMALLINT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "description" VARCHAR(100) NOT NULL,

    CONSTRAINT "TaskState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deliverable" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(15) NOT NULL,
    "stateId" SMALLINT NOT NULL DEFAULT 1,
    "percentageOfTask" SMALLINT NOT NULL DEFAULT 0,
    "date" TIMESTAMP(0) NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "Deliverable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TutoringPost" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "TutoringPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "message" VARCHAR(300) NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Major_name_key" ON "Major"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserPeriod_userId_periodId_key" ON "UserPeriod"("userId", "periodId");

-- CreateIndex
CREATE UNIQUE INDEX "TaskState_name_key" ON "TaskState"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Period_type_number_year_key" ON "Period"("type", "number", "year");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPeriod" ADD CONSTRAINT "UserPeriod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPeriod" ADD CONSTRAINT "UserPeriod_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "TaskState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deliverable" ADD CONSTRAINT "Deliverable_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "TaskState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deliverable" ADD CONSTRAINT "Deliverable_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TutoringPost" ADD CONSTRAINT "TutoringPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
