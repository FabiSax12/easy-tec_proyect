import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../ports/repositories/user.repository';
import { IPasswordHasher } from '../ports/services/password-hasher.service';
import { UserNotificationService } from '../ports/services/user-notification.service';
import { User } from '../../domain/entities/User';
import { UserAlreadyExistsException } from '../../domain/exceptions/user-already-exists.exception';
import { Email } from '../../domain/value-objects/email.vo';

export interface CreateUserUseCaseInput {
  email: Email;
  password: string; // Raw password string
  name: string;
  lastname: string;
  majorId?: number | null;
  roleId: number;
}

/**
 * Use case responsible for creating a new user account.
 * It orchestrates interactions between domain entities and application ports.
 */
@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
    @Inject(IPasswordHasher)
    private readonly passwordHasher: IPasswordHasher,
    @Inject(UserNotificationService)
    private readonly notificationService: UserNotificationService,
  ) { }

  /**
   * Executes the process of creating a new user.
   * @param input - The input data containing new user details.
   * @returns A Promise resolving to the created User entity.
   * @throws UserAlreadyExistsException if a user with the provided email already exists.
   * @throws SomeOtherDomainException if other business rules are violated during creation.
   */
  async execute(input: CreateUserUseCaseInput): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(input.email);
    if (existingUser) {
      throw new UserAlreadyExistsException(input.email);
    }

    const hashedPassword = await this.passwordHasher.hash(input.password);

    const newUser = User.createNew({
      email: input.email,
      password: hashedPassword,
      name: input.name,
      lastname: input.lastname,
      majorId: input.majorId,
      roleId: input.roleId,
    });

    const createdUser = await this.userRepository.save(newUser);

    this.notificationService.sendWelcomeNotification(createdUser.email, createdUser.name)
      .catch(error => {
        console.error(`Failed to send welcome notification to ${createdUser.email}:`, error);
      });

    return createdUser;
  }
}
