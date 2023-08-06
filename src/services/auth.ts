import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userService } from "./UserService";

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
        async authorize(credentials) {
          if (!credentials) {
            throw new Error("No credentials.");
          }
          const { email, password } = credentials;
          return userService.signInCredentials(email, password);
        },
      }),
    ],
    callbacks: {
      session: ({ session, token }) => {
        if(token && session.user) {
          session.user.roles = token.roles;
          session.user.id = token.id;
          session.user.accessToken = token.accessToken;
        }
        return session
      },
      jwt: ({ token, user}) => {
        if(user) {
          token.roles = user.roles;
          token.id = user.id;
          token.accessToken = user.accessToken
        }
        return token
      }
    },
    pages: {
      signIn: "/login"
    }
  };