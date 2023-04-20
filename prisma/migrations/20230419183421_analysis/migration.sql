/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Project";

-- CreateTable
CREATE TABLE "Analysis" (
    "projectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accessibilityInfo" TEXT NOT NULL,
    "accessibilityScore" DOUBLE PRECISION NOT NULL,
    "responsiveInfo" TEXT NOT NULL,
    "responsiveScore" DOUBLE PRECISION NOT NULL,
    "seoInfo" TEXT NOT NULL,
    "seoScore" DOUBLE PRECISION NOT NULL,
    "performanceInfo" TEXT NOT NULL,
    "performanceScore" DOUBLE PRECISION NOT NULL,
    "brandInfo" TEXT NOT NULL,
    "brandScore" DOUBLE PRECISION NOT NULL,
    "designInfo" TEXT NOT NULL,
    "designScore" DOUBLE PRECISION NOT NULL,
    "contentInfo" TEXT NOT NULL,
    "contentScore" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("projectId")
);
