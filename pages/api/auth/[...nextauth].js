import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../prisma/client";
import { verifyPassword } from "@/lib/auth";
// import { PrismaAdapter } from "@prisma/client";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        console.log(credentials);

        const { email, password } = credentials;

        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });

        if (!user) {
          prisma.$disconnect();
          throw new Error("No user found");
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          prisma.$disconnect();
          throw new Error("Password incorrect");
        }

        prisma.$disconnect();

        // return { email: user.email, name: user.lastName,};
        return user;
      },
    }),
  ],
  callback: {
    jwt: async () => {},
    session: () => {},
  },
};

export default NextAuth(authOptions);
