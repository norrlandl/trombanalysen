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

  const newAnalysis = await prisma.analysis.create({
    data: {
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
    },
  });
  res.status(201).json(newAnalysis);
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
