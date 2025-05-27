/*
  Warnings:

  - You are about to drop the column `description` on the `TaskState` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE taskstate_id_seq;
ALTER TABLE "TaskState" DROP COLUMN "description",
ALTER COLUMN "id" SET DEFAULT nextval('taskstate_id_seq');
ALTER SEQUENCE taskstate_id_seq OWNED BY "TaskState"."id";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "password" SET DATA TYPE TEXT;
