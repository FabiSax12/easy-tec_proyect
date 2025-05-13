import { Email } from '@/modules/users/domain/value-objects/email.vo';
import { Injectable } from '@nestjs/common';

/**
 * Defines the contract for a service that handles user-specific notifications.
 * This is a secondary port in the Application layer, abstracting the specific notification channel (e.g., email, push).
 */
@Injectable()
export abstract class UserNotificationService {
  /**
   * Sends a welcome notification to a newly registered user.
   * @param email - The email address of the user to notify.
   * // Or pass the User entity: abstract sendWelcomeNotification(user: User): Promise<void>;
   * @param name - The name of the user for personalization (optional).
   * @returns A Promise that resolves when the notification is sent (or queued).
   * @throws SomeNotificationException (or similar) if sending fails.
   */
  abstract sendWelcomeNotification(email: Email, name?: string): Promise<void>;

  /**
   * Sends a password reset notification to a user.
   * @param email - The email address of the user.
   * @param resetLink - The unique link for resetting the password.
   * @returns A Promise that resolves when the notification is sent.
   */
  abstract sendPasswordResetNotification(email: Email, resetLink: string): Promise<void>;
}
