import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { prisma } from "../../../prisma/client";
import { verifyPassword } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          user.close();
          throw new Error("No user found");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          user.close();
          throw new Error("Password incorrect");
        }

        user.close();

        return { email: user.email };
      },
    }),
  ],
  callback: {
    jwt: async () => {},
    session: () => {},
  },
});

// // Version 2

// export default NextAuth({
//   session: {
//     strategy: "jwt",
//   },

//   providers: [
//     CredentialsProvider({
//       async authorize(credentials, req) {
//         const { email, password } = credentials;

//         console.log(email, password);

//         const user = await prisma.user.findFirst({
//           where: {
//             email: email,
//           },
//         });

//         if (!user) {
//           // user.close();
//           throw new Error("No user found");
//         }

//         const isValid = await verifyPassword(password, user.password);

//         if (!isValid) {
//           // user.close();
//           throw new Error("Password incorrect");
//         }

//         // user.close();

//         return user;
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callback: {
//     jwt: async () => {},
//     session: () => {},
//   },
// });

// // Version 3

// export const authOptions = {
//   // Configure one or more authentication providers

//   session: {
//     strategy: "jwt",
//   },

//   providers: [
//     CredentialsProvider({
//       name: "Sign in",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "hello@youremail.com",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//         },
//       },
//       async authorize(credentials) {
//         // Handle Auth!
//         const user = { id: 1, name: "Hanna", email: "hanna@hotmail.com" };
//         return user;
//       },
//     }),
//     // ...add more providers here
//   ],
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
// export default NextAuth(authOptions);
