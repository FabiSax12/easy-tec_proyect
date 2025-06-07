import { TourProgress } from "../types/tour-types";

export const TOUR_STORAGE_KEY = 'autoScheduleTours';

export const INITIAL_TOUR_PROGRESS: TourProgress = {
  welcome: false,
  studentIdEntered: false,
  coursesLoaded: false,
  firstCourseSelected: false,
  campusConfigured: false,
  schedulesGenerated: false,
  completed: false,
};