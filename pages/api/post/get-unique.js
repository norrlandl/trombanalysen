import { prisma } from "../../../prisma/client";

export default async function handler(req, res) {
  const userId = req.body.id;
  const user = await prisma.user.findUnique({
    where: {
      // id: "e56ab25a-7320-497b-af20-13a71027c205",
      id: userId,
    },
  });
  res.status(201).json(user);
  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
