import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       company: "Skidskyttelandslaget",
//       role: "BASIC",
//       firstName: "Elvira",
//       lastName: "Öberg",
//     },
//   });
//   console.log(user);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

export const main = async () => {
  const user = await prisma.user.create({
    data: {
      company: "Skellefteå El",
      role: "BASIC",
    },
  });
};
