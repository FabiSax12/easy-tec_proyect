import { PrismaClient } from "../generated/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// Ensure the connection is closed when the application exits (optional but good practice)
// process.on('beforeExit', async () => {
//   await prisma.$disconnect();
// });

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}
