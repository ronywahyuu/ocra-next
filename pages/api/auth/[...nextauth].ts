import axios from "axios";
import { RequestInternal, Awaitable, User } from "next-auth";
import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers : [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials){
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Email and password required');
        }

        const user = await axios.post('https://dummyjson.com/auth/login',{
          username: credentials.username,
          password: credentials.password
        })

        if (user.data) {
          console.log(user.data)
          return user.data;
        }

      }
    })
  ]
})