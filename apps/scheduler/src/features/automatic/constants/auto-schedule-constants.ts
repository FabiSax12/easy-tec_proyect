import { SelectedCourse } from "../types/auto-schedule-types";

export const STORAGE_KEYS = {
  STUDENT_ID: 'studentId',
  AVAILABLE_COURSES: 'availableCourses',
  TOURS: 'tours',
} as const;

export const DEFAULT_SELECTED_COURSE: SelectedCourse = {
  code: "",
  campus: [{ name: "", typeOfGroup: "" }],
};