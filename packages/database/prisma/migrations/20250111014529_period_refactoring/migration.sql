/*
  Warnings:

  - You are about to drop the column `typeId` on the `Period` table. All the data in the column will be lost.
  - Added the required column `code` to the `Period` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Period` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Period` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Period" DROP COLUMN "typeId",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
