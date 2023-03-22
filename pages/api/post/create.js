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
      const newUser = await prisma.user.create({
        data: {
          // id: id,
          // createdAt: createdAt,
          // updatedAt: updatedAt,
          // company: company,
          // role: role,
          // firstName: firstName,
          // lastName: lastName,
          // email: email,
          // password: password,
          id,
          company,
          role,
          firstName,
          lastName,
          email,
          password,
          createdAt,
          updatedAt,
        },
      });
      res.status(201).json(newUser);
      break;
    default:
      // res.setHeader("Allow", ["GET", "POST"]);
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
