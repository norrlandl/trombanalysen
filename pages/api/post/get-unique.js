import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const user = await prisma.user.findUnique({
        where: {
          id: "e56ab25a-7320-497b-af20-13a71027c205",
          // id: userId,
        },
      });
      res.status(201).json(user);
      break;
    default:
      // res.setHeader("Allow", ["GET", "POST"]);
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
