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
            carrier: userFound.carrier,
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
        session.user = {
          id: token.id || session.user.id,
          email: token.email || session.user.email,
          name: token.name || session.user.name,
          lastname: token.lastname || session.user.lastname,
          carrier: token.carrier || session.user.carrier,
          avatar: token.avatar || session.user.avatar
        }
      }
      return session
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session.user) {
        token.id = session.user.id || token.id
        token.email = session.user.email || token.email
        token.name = session.user.name || token.name
        token.lastname = session.user.lastname || token.lastname
        token.carrier = session.user.carrier || token.carrier
        token.avatar = session.user.avatar || token.avatar
      }

      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.lastname = user.lastname
        token.carrier = user.carrier
        token.avatar = user.avatar
      }
      return token
    }
  }
}