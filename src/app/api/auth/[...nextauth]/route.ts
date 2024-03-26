import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import db from "@/libs/db"
import useUserInfo from "@/store/user"
import bcrypt from "bcrypt"

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "text", placeholder: "user@estudiantec.cr"},
        password: {label: "Contraseña", type: "password"}
      },
      async authorize(credentials, req) {
        if(credentials) {
          const userFound = await db.user.findUnique({
            where: {
              email: credentials.email
            }
          })

          if(!userFound) return null

          const matchedPasswords = await bcrypt.compare(credentials.password, userFound.password)
          if(!matchedPasswords) return null

          return {
            id: userFound.id.toString(),
            email: userFound.email,
            name: userFound.name,
            lastname: userFound.lastname
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
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
