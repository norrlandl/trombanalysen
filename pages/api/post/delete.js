import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { id } = req.body;
      const user = await prisma.user.delete({
        where: {
          id,
        },
      });
      res.status(201).json(user);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      // res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
