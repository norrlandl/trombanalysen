// import prisma from "../../../lib/prisma";

// export default async function handler(req, res) {
//   const { company, role, published } = req.body;
//   const result = await prisma.user.create({
//     data: {
//       company: company,
//       role: role,
//       published: published,
//     },
//   });
//   res.json(result);
// }

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { company, role } = req.body;
      const user = await prisma.user.create({
        data: {
          company,
          role,
        },
      });
      res.status(201).json(user);
      break;
    default:
      // res.setHeader("Allow", ["GET", "POST"]);
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
