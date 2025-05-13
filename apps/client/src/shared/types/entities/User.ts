import type { Prisma, User as PrismaUser } from "@easy-tec/db"

export interface User extends Omit<PrismaUser, "password"> {
  readonly id: number
  name: string
  lastname: string;
  email: string;
  avatar: string;
  carrier: string;
  verified: boolean;
}

export interface CreateUserDto extends Prisma.UserCreateInput { }
export interface UpdateUserDto extends Prisma.UserUpdateInput { }