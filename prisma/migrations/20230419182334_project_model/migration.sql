-- CreateTable
CREATE TABLE "Project" (
    "projectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accessibilityScore" DOUBLE PRECISION NOT NULL,
    "accessibilityInfo" TEXT NOT NULL,
    "responsiveScore" DOUBLE PRECISION NOT NULL,
    "responsiveInfo" TEXT NOT NULL,
    "seoScore" DOUBLE PRECISION NOT NULL,
    "seoInfo" TEXT NOT NULL,
    "performanceScore" DOUBLE PRECISION NOT NULL,
    "performanceInfo" TEXT NOT NULL,
    "brandScore" DOUBLE PRECISION NOT NULL,
    "brandInfo" TEXT NOT NULL,
    "designScore" DOUBLE PRECISION NOT NULL,
    "designInfo" TEXT NOT NULL,
    "contentScore" DOUBLE PRECISION NOT NULL,
    "contentInfo" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId")
);
