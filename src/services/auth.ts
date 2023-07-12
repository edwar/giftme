import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import isSame from "@/services/isSame";
import { prisma } from "@/app/api/prisma.db";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: {
            label: "Correo",
            type: "email",
            placeholder: "user@email.com",
          },
          password: { label: "Contraseña", type: "password" },
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials.password) return null;
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
  
          if (!user) return null;
  
          const matchPassword = await isSame(credentials.password, user.password);
  
          if (!matchPassword) return null;
  
          const newUser = {
            ...user,
            password: undefined,
          };
  
          return newUser;
        },
      }),
      // ...add more providers here
    ],
    callbacks: {
      session: ({ session, token }) => {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
          },
        };
      },
      jwt: ({ token, user }) => {
        if(user) {
          const u = user as unknown as any
          return {
            ...token,
            id: u.id,
          }
        }
        return token
      }
    },
  };