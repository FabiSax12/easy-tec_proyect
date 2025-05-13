import { Password } from '@/modules/users/domain/value-objects/password.vo';
import { Injectable } from '@nestjs/common';

/**
 * Defines the contract for a service that handles password hashing and verification.
 * This is a secondary port in the Application layer, abstracting the specific hashing algorithm used.
 */
@Injectable()
export abstract class IPasswordHasher {
  /**
   * Hashes a raw password string.
   * @param password - The raw password string to hash.
   * @returns A Promise resolving to the hashed password string.
   */
  abstract hash(password: string): Promise<Password>;

  /**
   * Verifies a raw password string against a hashed password string.
   * @param password - The raw password string to verify.
   * @param hashed - The hashed password string to compare against.
   * @returns A Promise resolving to true if the password matches the hash, false otherwise.
   */
  abstract compare(password: string, hashed: string): Promise<boolean>;
}
