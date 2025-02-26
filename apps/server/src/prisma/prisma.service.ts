import { Injectable, OnModuleInit } from "@nestjs/common"
import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect()
      console.log("Connected to the database")
    } catch (error) {
      console.log("Error connecting to the database: " + error)
    }
  }
}