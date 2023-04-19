import { prisma } from "../../../prisma/client";

export default async function handler(req, res) {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.status(201).json(users);
  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}

// export default async function handler(req, res) {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       const users = await prisma.user.findMany({
//         orderBy: {
//           createdAt: "desc",
//         },
//       });
//       res.status(200).json(users);
//       break;
//     default:
//       // res.setHeader("Allow", ["GET", "POST"]);
//       res.setHeader("Allow", ["GET"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
