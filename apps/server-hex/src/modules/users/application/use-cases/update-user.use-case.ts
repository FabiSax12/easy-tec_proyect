import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/User';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { UserRepository } from '../ports/repositories/user.repository';
import { MajorRepository } from '@/core/application/ports/repositories/major.repository';


export interface UpdateUserProfileUseCaseInput {
  userId: number;
  name?: string;
  lastname?: string;
  majorId?: number | null;
  // NOTA: Email, password, verified, roleId deben ser actualizados por otros casos de uso.
}

/**
 * Use case responsible for updating a user's profile details.
 * It fetches the existing user, applies updates, and persists the changes.
 * Requires the user to exist.
 */
@Injectable()
export class UpdateUserProfileUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
    @Inject(MajorRepository)
    private readonly majorRepository: MajorRepository

  ) { }

  /**
   * Executes the process of updating a user's profile.
   * @param input - The input data containing the user ID and updated profile details.
   * @returns A Promise resolving to the updated User entity.
   * @throws NotFoundException if the user with the specified ID does not exist.
   * @throws ValidationException or other domain exception if updates violate business rules.
   */
  async execute(input: UpdateUserProfileUseCaseInput): Promise<User> {
    // 1. Obtener la entidad del usuario existente utilizando el repositorio
    const user = await this.userRepository.findById(input.userId);
    if (!user) {
      throw new NotFoundException('User', 'id', input.userId);
    }

    let changesMade = false;

    if (input.name !== undefined) {
      user.name = input.name;
      changesMade = true;
    }
    if (input.lastname !== undefined) {
      user.lastname = input.lastname;
      changesMade = true;
    }

    if (input.majorId !== undefined) {
      if (input.majorId !== null) {
        const majorExists = await this.majorRepository.findById(input.majorId);
        if (!majorExists) {
          throw new NotFoundException('Major', 'id', input.majorId);
        }
      }
      user.majorId = input.majorId;
      changesMade = true;
    }

    if (changesMade) {
      const updatedUser = await this.userRepository.save(user);
      return updatedUser;
    } else {
      return user;
    }
  }
}
