import { Inject, Injectable } from '@nestjs/common';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { User } from '../../domain/entities/User';
import { UserRepository } from '../ports/repositories/user.repository';
import { Email } from '../../domain/value-objects/email.vo';

export interface GetUserByEmailUseCaseInput {
  email: Email;
}

/**
 * Use case responsible for retrieving a user by their Email.
 * It uses the UserRepository port to fetch the user data.
 * Throws a NotFoundException if the user is not found.
 */
@Injectable()
export class GetUserByEmailUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) { }

  /**
   * Executes the process of finding a user by Email.
   * @param input - The input containing the user Email.
   * @returns A Promise resolving to the found User entity.
   * @throws NotFoundException if the user with the specified Email does not exist.
   */
  async execute(input: GetUserByEmailUseCaseInput): Promise<User> {
    const user = await this.userRepository.findByEmail(input.email);

    if (!user) {
      throw new NotFoundException('User', 'email', input.email.value);
    }

    return user;
  }
}
