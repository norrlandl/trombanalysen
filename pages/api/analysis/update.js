import { prisma } from "../../../prisma/client";

export default async function handler(req, res) {
  const {
    id,
    createdAt,
    updatedAt,
    company,
    status,
    accessibilityInfo,
    accessibilityScore,
    responsiveInfo,
    responsiveScore,
    seoInfo,
    seoScore,
    performanceInfo,
    performanceScore,
    brandInfo,
    brandScore,
    designInfo,
    designScore,
    contentInfo,
    contentScore,
  } = req.body;
  const updateAnalysis = await prisma.analysis.update({
    where: {
      // id: req.query.id,
      id,
    },
    data: {
      id: id,
      createdAt: createdAt,
      updatedAt: updatedAt,
      company: company,
      status: status,
      accessibilityInfo: accessibilityInfo,
      accessibilityScore: accessibilityScore,
      responsiveInfo: responsiveInfo,
      responsiveScore: responsiveScore,
      seoInfo: seoInfo,
      seoScore: seoScore,
      performanceInfo: performanceInfo,
      performanceScore: performanceScore,
      brandInfo: brandInfo,
      brandScore: brandScore,
      designInfo: designInfo,
      designScore: designScore,
      contentInfo: contentInfo,
      contentScore: contentScore,
    },
  });
  res.status(201).json(updateAnalysis);
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
