import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../application/ports/repositories/user.repository';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { User } from '../../../domain/entities/User';
import { PrismaUserMapper } from './mappers/prisma-user.mapper';
import { Prisma } from '@easy-tec/db';
import { Email } from '@/modules/users/domain/value-objects/email.vo';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userMapper: PrismaUserMapper,
  ) { }
  findByEmail(email: Email): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  isUserPeriod(userId: number, periodId: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  isUserCourse(userId: number, courseId: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  isUserTask(userId: number, taskId: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  verify(userId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({ where: { id } });
    if (!prismaUser) return null;

    return this.userMapper.toDomain(prismaUser);
  }

  async save(user: User): Promise<User> {
    const prismaData = user.id ? this.userMapper.toPersistenceUpdateInput(user) : this.userMapper.toPersistenceCreateInput(user);

    const savedPrismaUser = user.id
      ? await this.prisma.user.update({ where: { id: user.id }, data: prismaData })
      : await this.prisma.user.create({ data: prismaData as Prisma.UserCreateInput });

    return this.userMapper.toDomain(savedPrismaUser);
  }




}
