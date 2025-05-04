import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@easy-tec/db";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log("Connected to the database");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
