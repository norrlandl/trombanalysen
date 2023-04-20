-- CreateTable
CREATE TABLE "Analysis" (
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "company" TEXT NOT NULL,
    "accessibilityInfo" TEXT,
    "accessibilityScore" DOUBLE PRECISION,
    "responsiveInfo" TEXT,
    "responsiveScore" DOUBLE PRECISION,
    "seoInfo" TEXT,
    "seoScore" DOUBLE PRECISION,
    "performanceInfo" TEXT,
    "performanceScore" DOUBLE PRECISION,
    "brandInfo" TEXT,
    "brandScore" DOUBLE PRECISION,
    "designInfo" TEXT,
    "designScore" DOUBLE PRECISION,
    "contentInfo" TEXT,
    "contentScore" DOUBLE PRECISION,

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("projectId")
);
