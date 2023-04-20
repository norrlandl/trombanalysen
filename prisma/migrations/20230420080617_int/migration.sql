/*
  Warnings:

  - You are about to alter the column `accessibilityScore` on the `Analysis` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `responsiveScore` on the `Analysis` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `seoScore` on the `Analysis` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `performanceScore` on the `Analysis` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `brandScore` on the `Analysis` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `designScore` on the `Analysis` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `contentScore` on the `Analysis` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Analysis" ALTER COLUMN "accessibilityScore" SET DATA TYPE INTEGER,
ALTER COLUMN "responsiveScore" SET DATA TYPE INTEGER,
ALTER COLUMN "seoScore" SET DATA TYPE INTEGER,
ALTER COLUMN "performanceScore" SET DATA TYPE INTEGER,
ALTER COLUMN "brandScore" SET DATA TYPE INTEGER,
ALTER COLUMN "designScore" SET DATA TYPE INTEGER,
ALTER COLUMN "contentScore" SET DATA TYPE INTEGER;
