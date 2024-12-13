-- AlterTable
ALTER TABLE "User" ADD COLUMN     "carrier" TEXT,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;
