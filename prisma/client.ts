import { PrismaClient } from '@prisma/client';

// Function to create a new instance of PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Define a type for the PrismaClientSingleton
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Define a global variable for Prisma
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// If globalForPrisma.prisma exists, use it; otherwise, create a new PrismaClient
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Export the prisma object
export default prisma;

// If the environment is not production, assign the prisma object to globalForPrisma.prisma
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
