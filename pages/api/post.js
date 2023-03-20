import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { company, role, id } = req.body;
      const user = await prisma.user.create({
        data: {
          company,
          role,
          id,
        },
      });
      res.status(201).json(user);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
