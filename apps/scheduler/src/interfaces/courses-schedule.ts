export interface ScheduleEvent {
  id: string;
  day: string;
  start: string;
  end: string;
  title: string;
  group: number;
  location?: string;
  color?: string;
}

export interface Schedule {
  day: string
  start: string
  end: string
}

export interface ScheduleRow {
  id: string
  code: string
  subject: string
  group: number
  credits: number
  schedules: Schedule[]
  classroom: string
  teachers: string[]
  totalSpaces: number
  typeOfSubject: string
  typeOfGroup: string
  reserved: number
  color?: string
}

export interface CourseNameAndCode {
  name: string;
  code: string;
}

export interface SelectedCourse {
  code: string;
  campus: { name: string; typeOfGroup: string }[];
}

export interface SimpleCourseRow {
  campus: string;
  code: string;
  name: string;
  group: number;
  department: string;
  credits: number;
  modeId: string;
  mode: string;
  type: string;
  teacher: string;
  schedules: Schedule[];
}