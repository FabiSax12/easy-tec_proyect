export interface TourStep {
  element: string;
  popover: {
    title: string;
    description: string;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
  };
}

export interface TourProgress {
  welcome: boolean;
  studentIdEntered: boolean;
  coursesLoaded: boolean;
  firstCourseSelected: boolean;
  campusConfigured: boolean;
  schedulesGenerated: boolean;
  completed: boolean;
}