import { Module } from "@nestjs/common"
import { MailerModule } from "@nestjs-modules/mailer"
import { AuthService } from "./auth.service"
import { UsersModule } from "../users/users.module"
import { JwtModule, JwtService } from "@nestjs/jwt"
import { AuthController } from "./auth.controller"
import { UsersService } from "../users/users.service"

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "15min" },
    }),
    MailerModule
  ],
  providers: [AuthService, JwtService, UsersService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }