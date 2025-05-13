export interface ScheduleEvent {
  id: string;
  day: string;
  start: string;
  end: string;
  title: string;
  group: number;
  campus?: string;
  teachers?: string[];
  location?: string;
  typeOfGroup?: string;
  color?: string;
}

export interface Schedule {
  day: string
  start: string
  end: string
}

interface CommonScheduleRow {
  id: string
  code: string
  subject: string
  credits: number;
  group: number;
  color?: string
  schedules: Schedule[]
  teachers: string[]
  typeOfGroup: string
  classroom: string | null
  totalSpaces: number | null
  typeOfSubject: string | null
  reserved: number | null
}

export interface ScheduleRow extends CommonScheduleRow {
  // classroom: string
  // totalSpaces: number
  // typeOfSubject: string
  // reserved: number
}

export interface SimpleCourseRow extends CommonScheduleRow {
  campus: string;
  department: string;
  modeId: string;
  mode: string;
}

export interface CourseNameAndCode {
  name: string;
  code: string;
}

export interface SelectedCourse {
  code: string;
  campus: { name: string; typeOfGroup: string }[];
}

