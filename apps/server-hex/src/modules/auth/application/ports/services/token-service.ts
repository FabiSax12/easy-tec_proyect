import { Injectable } from '@nestjs/common';
import { User } from '@/modules/users/domain/entities/User';
import { AuthToken } from '../../../domain/value-objects/auth-token.vo';

/**
 * Defines the contract for a service that handles the creation, signing, and verification of authentication tokens.
 * This is a secondary port in the Application layer of the Auth module, abstracting the token mechanism (e.g., JWT).
 */
@Injectable() // Marca como inyectable para NestJS
export abstract class TokenService {
  /**
   * Generates a new authentication token for a given user.
   * This token should contain information necessary to identify the user later.
   * @param user - The User entity for which to generate the token.
   * @returns A Promise resolving to an AuthToken value object.
   */
  abstract generateToken(user: User): Promise<AuthToken>;

  /**
   * Verifies an authentication token string and returns the User entity associated with it if valid.
   * @param token - The token string to verify.
   * @returns A Promise resolving to the User entity if the token is valid and the user exists, or null otherwise.
   * @throws TokenInvalidOrExpiredException if the token is invalid, expired, or cannot be processed.
   */
  abstract verifyToken(token: string): Promise<User | null>;

  /**
   * Refreshes an existing authentication token, generating a new one.
   * This is useful for maintaining user sessions without requiring re-authentication.
   * @param token - The token string to refresh.
   * @returns A Promise resolving to a new AuthToken value object.
   * @throws TokenInvalidOrExpiredException if the token is invalid or expired.
   */
  abstract refreshToken(token: string): Promise<AuthToken>;

  /**
   * Invalidates a given authentication token, making it unusable for future requests.
   * This is useful for logging out users or revoking tokens.
   * @param token - The token string to invalidate.
   * @returns A Promise that resolves when the token has been invalidated.
   */
  abstract invalidateToken(token: string): Promise<void>;
}
