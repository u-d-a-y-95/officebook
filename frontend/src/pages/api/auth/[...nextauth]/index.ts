import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credential",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const { email, password } = credentials;
        const res = await (
          await fetch("http://localhost:4000/auth/signin", {
            method: "post",

            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          })
        ).json();
        if (res.status === 200) {
          return res.data;
        }
        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  jwt: {
    encode({ token }) {
      return token.token;
    },
    decode({ token }) {
      return true;
    },
  },

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      return { token: user.token };
    },
  },
};

export default NextAuth(authOptions);
