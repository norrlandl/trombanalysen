import { prisma } from "../../../prisma/client";

export default async function handler(req, res) {
  const { id } = req.body;
  const analysis = await prisma.analysis.delete({
    where: {
      id,
    },
  });
  res.status(201).json(analysis);
  res.setHeader("Allow", ["POST"]);
}
