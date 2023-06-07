import type { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../lib/prisma"


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  theme: {
    colorScheme: "light",
  },
  providers: [

    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        }
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  
    pages: {
      signIn: '/signin',
    }
};
