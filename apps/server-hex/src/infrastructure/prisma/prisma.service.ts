import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@easy-tec/db';

/**
 * Encapsulates the PrismaClient and manages its lifecycle within a NestJS application.
 * This is a global infrastructure service used by Prisma repositories.
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
      errorFormat: "pretty",
      omit: {
        user: {
          password: true,
          createdAt: true,
          verified: true,
        }
      }
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
