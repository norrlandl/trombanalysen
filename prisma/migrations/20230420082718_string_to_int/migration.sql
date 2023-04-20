/*
  Warnings:

  - The `accessibilityScore` column on the `Analysis` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `responsiveScore` column on the `Analysis` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `seoScore` column on the `Analysis` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `performanceScore` column on the `Analysis` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `brandScore` column on the `Analysis` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `designScore` column on the `Analysis` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `contentScore` column on the `Analysis` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Analysis" DROP COLUMN "accessibilityScore",
ADD COLUMN     "accessibilityScore" INTEGER,
DROP COLUMN "responsiveScore",
ADD COLUMN     "responsiveScore" INTEGER,
DROP COLUMN "seoScore",
ADD COLUMN     "seoScore" INTEGER,
DROP COLUMN "performanceScore",
ADD COLUMN     "performanceScore" INTEGER,
DROP COLUMN "brandScore",
ADD COLUMN     "brandScore" INTEGER,
DROP COLUMN "designScore",
ADD COLUMN     "designScore" INTEGER,
DROP COLUMN "contentScore",
ADD COLUMN     "contentScore" INTEGER;
