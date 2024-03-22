import {PrismaClient} from "@prisma/client"

function prismaSingletone() {
  return new PrismaClient()
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof prismaSingletone> | undefined
}

const prisma = globalForPrisma.prisma ?? prismaSingletone() 

export default prisma
