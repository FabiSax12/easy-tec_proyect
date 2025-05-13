import { Injectable } from '@nestjs/common';
import { User as PrismaUserModel, Prisma } from '@easy-tec/db';
import { User } from '../../../../domain/entities/User';
import { Email } from '../../../../domain/value-objects/email.vo';
import { Password } from '../../../../domain/value-objects/password.vo';

/**
 * Mapper to convert between Prisma User model and User domain entity.
 * This is part of the Infrastructure layer (Persistence Adapter).
 */
@Injectable()
export class PrismaUserMapper {

  /**
   * Converts a Prisma User model to a User domain entity.
   * Used when loading data from the database.
   * @param prismaUser - The Prisma User model.
   * @returns The corresponding User domain entity.
   */
  toDomain(prismaUser: PrismaUserModel): User {
    return new User({
      id: prismaUser.id,
      email: new Email(prismaUser.email),
      password: new Password(prismaUser.password),
      name: prismaUser.name,
      lastname: prismaUser.lastname,
      majorId: prismaUser.majorId,
      verified: prismaUser.verified,
      roleId: prismaUser.roleId,
      createdAt: prismaUser.createdAt,
    });
  }

  /**
   * Converts a User domain entity to a Prisma User creation input object.
   * Used when creating a new record in the database.
   * @param user - The User domain entity.
   * @returns The Prisma CreateUserInput object.
   */
  toPersistenceCreateInput(user: User): Prisma.UserCreateInput {
    return {
      email: user.email.toString(),
      password: user.password.toString(),
      name: user.name,
      lastname: user.lastname,
      verified: user.verified,
      major: {
        connect: {
          id: user.majorId,
        }
      },
      role: {
        connect: {
          id: user.roleId,
        }
      }
    };
  }

  /**
  * Converts a User domain entity to a Prisma User update input object.
  * Used when updating an existing record in the database.
  * @param user - The User domain entity.
  * @returns The Prisma UpdateUserInput object.
  */
  toPersistenceUpdateInput(user: User): Prisma.UserUpdateInput {
    return {
      email: user.email.toString(),
      password: user.password.toString(),
      name: user.name,
      lastname: user.lastname,
      verified: user.verified,
      createdAt: user.createdAt,
      major: {
        connect: {
          id: user.majorId,
        },
      },
      role: {
        connect: {
          id: user.roleId,
        }
      }
    };
  }
}
