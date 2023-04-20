import { prisma } from "../../../prisma/client";

export default async function handler(req, res) {
  const users = await prisma.analysis.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.status(201).json(users);
  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
