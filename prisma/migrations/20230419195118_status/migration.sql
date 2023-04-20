-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "Analysis" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PROGRESS';
