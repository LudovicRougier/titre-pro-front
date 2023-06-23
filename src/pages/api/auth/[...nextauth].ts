/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { container } from "@/container/container.config";
import { TYPES } from "@/container/types";
import { LoginUseCase } from "@/domain/usecase/auth/LoginUseCase";
import { Path } from "@/shared/enums/path";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const loginUseCase = container.get<LoginUseCase>(TYPES.LoginUseCase);
const sessionMaxAge = 15 * 24 * 60 * 60;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: sessionMaxAge,
  },
  jwt: {
    maxAge: sessionMaxAge,
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => loginUseCase.invoke(credentials),
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session?.token) {
        token.token = session.token;
        return token;
      }

      return { ...user, ...token };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: Path.SIGNIN,
  },
};

export default NextAuth(authOptions);
