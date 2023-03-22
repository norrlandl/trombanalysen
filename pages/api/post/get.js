import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const users = await prisma.user.findMany();
      res.status(201).json(users);
      break;
    default:
      // res.setHeader("Allow", ["GET", "POST"]);
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
