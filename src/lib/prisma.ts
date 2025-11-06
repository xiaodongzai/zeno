import { PrismaClient } from '@prisma/client'

// 防止在开发环境中创建多个 Prisma Client 实例
// 在 Next.js 中，由于热重载，可能会创建多个实例

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

