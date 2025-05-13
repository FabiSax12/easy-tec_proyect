import { Period } from '@/core/domain/entities/Period';
import { User } from '@/modules/users/domain/entities/User';

/**
 * Represents a user's enrollment in a specific academic period.
 * This entity is the core of the User Periods module.
 */
export class UserPeriod {
  /**
   * The unique identifier for the user period record.
   * @readonly
   */
  public readonly id: number;

  /**
   * The date and time of the enrollment.
   * @readonly
   */
  public readonly enrollmentDate: Date;

  /**
   * The ID of the enrolled user.
   * @readonly
   */
  public readonly userId: number;

  /**
   * The ID of the enrolled period.
   * @readonly
   */
  public readonly periodId: number;

  // Opcional: Propiedades para relaciones si las cargas con frecuencia
  // Si no las cargas siempre, es mejor no incluirlas aquí por defecto
  // pero manejarlas a nivel de caso de uso o repositorio.
  public user?: User;
  public period?: Period;

  /**
   * Creates an instance of UserPeriod.
   * Used when loading an existing user period record from persistence.
   * @param props - The properties to initialize the UserPeriod entity.
   * @param props.id - The unique identifier for the user period record.
   * @param props.enrollmentDate - The date and time of enrollment.
   * @param props.userId - The ID of the enrolled user.
   * @param props.periodId - The ID of the enrolled period.
   * @param props.user - Optional related User entity.
   * @param props.period - Optional related Period entity.
   */
  constructor(props: {
    id: number;
    enrollmentDate: Date;
    userId: number;
    periodId: number;
    user?: User; // Optional
    period?: Period; // Optional
  }) {
    this.id = props.id;
    this.enrollmentDate = props.enrollmentDate;
    this.userId = props.userId;
    this.periodId = props.periodId;
    this.user = props.user;
    this.period = props.period;
  }

  /**
   * Creates a new UserPeriod instance with default values for properties like 'enrollmentDate'.
   * Use this static method when creating a user period record for the first time in a use case.
   * @param props - The properties required to create a new user period record.
   * @param props.userId - The ID of the user to enroll.
   * @param props.periodId - The ID of the period to enroll the user in.
   * @returns A new UserPeriod entity instance.
   */
  static createNew(props: {
    userId: number;
    periodId: number;
  }): UserPeriod {
    // Basic validation if needed
    if (!props.userId || !props.periodId) {
      throw new Error("User ID and Period ID are required for enrollment.");
    }

    return new UserPeriod({
      id: null as any, // Use a placeholder or handle in persistence/mapper
      enrollmentDate: new Date(), // Default value
      userId: props.userId,
      periodId: props.periodId,
    });
  }
}
