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

  // Does user already exist?

  const existingUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
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
