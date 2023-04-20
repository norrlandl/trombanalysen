/*
  Warnings:

  - The primary key for the `Analysis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `projectId` on the `Analysis` table. All the data in the column will be lost.
  - The required column `id` was added to the `Analysis` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Analysis" DROP CONSTRAINT "Analysis_pkey",
DROP COLUMN "projectId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id");
