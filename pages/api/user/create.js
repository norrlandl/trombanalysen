import { hashPassword } from "@/lib/auth";
import { prisma } from "../../../prisma/client";

export default async function handler(req, res) {
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

  // Validation

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({ message: "Ivanlid input" });
    return;
  }

  // Hash password

  const hashedPassword = await hashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      id: id,
      company: company,
      role: role,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      createdAt: createdAt,
      updatedAt: updatedAt,
    },
  });
  res.status(201).json(newUser);
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}

// export default async function handler(req, res) {
//   const { method } = req;

//   switch (method) {
//     case "POST":
//       const {
//         id,
//         company,
//         role,
//         firstName,
//         lastName,
//         email,
//         password,
//         createdAt,
//         updatedAt,
//       } = req.body;
//       const newUser = await prisma.user.create({
//         data: {
//           // id: id,
//           // createdAt: createdAt,
//           // updatedAt: updatedAt,
//           // company: company,
//           // role: role,
//           // firstName: firstName,
//           // lastName: lastName,
//           // email: email,
//           // password: password,
//           id,
//           company,
//           role,
//           firstName,
//           lastName,
//           email,
//           password,
//           createdAt,
//           updatedAt,
//         },
//       });
//       res.status(201).json(newUser);
//       break;
//     default:
//       // res.setHeader("Allow", ["GET", "POST"]);
//       res.setHeader("Allow", ["POST"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
