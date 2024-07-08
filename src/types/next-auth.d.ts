import NextAuth, { DefaultSession } from "next-auth"
import { JWT as DefaultJWT } from "next-auth/jwt"

interface DefaultUser {
  id: string;
  email: string;
  name: string;
  lastname: string;
  carrier: string | null;
  avatar: string;
}

declare module "next-auth" {
  interface User extends DefaultUser { }

  interface Session extends DefaultSession {
    user: User
  }

}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT extends DefaultUser { }
}
