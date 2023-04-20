/*
  Warnings:

  - Added the required column `updatedAt` to the `Analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analysis" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "accessibilityInfo" DROP NOT NULL,
ALTER COLUMN "accessibilityScore" DROP NOT NULL,
ALTER COLUMN "responsiveInfo" DROP NOT NULL,
ALTER COLUMN "responsiveScore" DROP NOT NULL,
ALTER COLUMN "seoInfo" DROP NOT NULL,
ALTER COLUMN "seoScore" DROP NOT NULL,
ALTER COLUMN "performanceInfo" DROP NOT NULL,
ALTER COLUMN "performanceScore" DROP NOT NULL,
ALTER COLUMN "brandInfo" DROP NOT NULL,
ALTER COLUMN "brandScore" DROP NOT NULL,
ALTER COLUMN "designInfo" DROP NOT NULL,
ALTER COLUMN "designScore" DROP NOT NULL,
ALTER COLUMN "contentInfo" DROP NOT NULL,
ALTER COLUMN "contentScore" DROP NOT NULL;
