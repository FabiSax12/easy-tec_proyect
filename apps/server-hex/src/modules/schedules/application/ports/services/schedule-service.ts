import { Injectable } from '@nestjs/common';
import { MergedCourseRow } from '../../../domain/value-objects/merged-course-row.vo';
import { SimpleCourseRow } from '../../../domain/value-objects/simple-course-row.vo';


/**
 * Defines the contract for a service or gateway that retrieves academic schedule data from an external source.
 * This is a secondary port in the Application layer of the Schedules module.
 * It abstracts the external service interaction details.
 */
@Injectable() // Marca como inyectable para NestJS
export abstract class ScheduleService {
  /**
   * Retrieves available course schedules from the external source based on campus, major, and period.
   * @param campus - The campus identifier.
   * @param major - The major identifier.
   * @param period - The period identifier.
   * @returns A Promise resolving to an array of MergedCourseRow value objects.
   * @throws ScheduleServiceException if there is an error interacting with the external service.
   */
  abstract getAvailableAcademicSchedules(campus: string, major: string, period: string): Promise<MergedCourseRow[]>;

  /**
   * Retrieves available course schedules for a specific student.
   * The external service might have a specific endpoint for this.
   * @param studentId - The ID of the student.
   * @returns A Promise resolving to an array of SimpleCourseRow value objects or similar.
   * @throws ScheduleServiceException if there is an error interacting with the external service.
   */
  abstract getSchedulesByStudentId(studentId: string): Promise<SimpleCourseRow[]>; // Assuming SimpleCourseRow is returned

  /**
   * Retrieves specific schedule details for a student based on provided course codes and parameters.
   * This matches the logic in your existing controller/service.
   * @param studentId - The ID of the student.
   * @param codes - An array of course code objects with additional parameters.
   * @returns A Promise resolving to an array of SimpleCourseRow value objects or similar details.
   * @throws ScheduleServiceException if there is an error interacting with the external service.
   */
  abstract getSpecificitiesSchedules(studentId: string, codes: { code: string, campus: { name: string, typeOfGroup: string }[] }[]): Promise<SimpleCourseRow[]>; // Assuming SimpleCourseRow or similar structure is returned

  // abstract getCampuses(): Promise<string[]>;
  // abstract getMajors(): Promise<string[]>;
  // abstract getPeriods(): Promise<string[]>;
}
