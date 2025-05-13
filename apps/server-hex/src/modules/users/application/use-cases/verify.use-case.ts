import { Inject } from "@nestjs/common";
import { UserRepository } from "../ports/repositories/user.repository";
import { NotFoundException } from "@/shared/exceptions/not-found.exception";

export class VerifyUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) { }

  async execute(userId: number): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new NotFoundException("User", "id", userId);
    }

    await this.userRepository.verify(userId);

    // TODO: Send notification
  }
}