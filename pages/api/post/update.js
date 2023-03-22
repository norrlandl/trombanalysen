import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const {
        id,
        company,
        role,
        firstName,
        lastName,
        email,
        password,
        createdAt,
        updatedAt,
      } = req.body;
      const updateUser = await prisma.user.update({
        where: {
          // id: req.query.id,
          id,
        },
        data: {
          company: company,
          role: role,
          firstName: firstName,
          lastName: lastName,
          // email: email,
          // password: password,
        },
      });
      res.status(201).json(updateUser);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      // res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
