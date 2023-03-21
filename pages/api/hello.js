// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const users = await prisma.user.findMany();
  res.json(users);
}

// export async function getServerSideProps() {
//   const users = await prisma.user.findMany();
//   return {
//     props: {
//       users: JSON.parse(JSON.stringify(users)),
//     },
//   };
// }
