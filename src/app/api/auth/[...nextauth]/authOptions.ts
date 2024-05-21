import bcrypt from "bcryptjs"
import db from "@/libs/db"
import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@estudiantec.cr" },
        password: { label: "Contraseña", type: "password" }
      },
      async authorize(credentials, req) {
        if (credentials) {
          const userFound = await db.user.findUnique({
            where: {
              email: credentials.email
            }
          })

          if (!userFound) return null

          const matchedPasswords = await bcrypt.compare(credentials.password, userFound.password)
          if (!matchedPasswords) return null

          return {
            id: userFound.id.toString(),
            email: userFound.email,
            name: userFound.name,
            lastname: userFound.lastname,
            avatar: userFound.avatar
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/auth"
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.image = token.avatar
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    }
  }
}