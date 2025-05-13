import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/User';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { UserRepository } from '../ports/repositories/user.repository';

export interface GetUserByIdUseCaseInput {
  userId: number;
}

/**
 * Use case responsible for retrieving a user by their ID.
 * It uses the UserRepository port to fetch the user data.
 * Throws a NotFoundException if the user is not found.
 */
@Injectable()
export class GetUserByIdUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) { }

  /**
   * Executes the process of finding a user by ID.
   * @param input - The input containing the user ID.
   * @returns A Promise resolving to the found User entity.
   * @throws NotFoundException if the user with the specified ID does not exist.
   */
  async execute(input: GetUserByIdUseCaseInput): Promise<User> {
    const user = await this.userRepository.findById(input.userId);

    if (!user) {
      throw new NotFoundException('User', 'id', input.userId);
    }

    return user;
  }
}
