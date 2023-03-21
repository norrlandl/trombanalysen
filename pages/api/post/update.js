import prisma from "../../../lib/prisma";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "PUT":
      const { id, company, role } = req.body;
      const updateUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          updatedAt: updatedAt,
          company: company,
          role: role,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      });
      res.status(201).json(updateUser);
      break;
    default:
      // res.setHeader("Allow", ["GET", "POST"]);
      res.setHeader("Allow", ["PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// export default async function handler(req, res) {
//   const { published } = req.body;
//   const result = await prisma.user.update({
//     where: {
//       id: req.query.id,
//     },
//     // data: {
//     //   published: published,
//     // },
//   });
//   res.json(result);
// }
