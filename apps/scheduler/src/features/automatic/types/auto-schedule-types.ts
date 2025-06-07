export interface CourseNameAndCode {
  code: string;
  name: string;
}

export interface Campus {
  name: string;
  typeOfGroup: string;
}

export interface SelectedCourse {
  code: string;
  campus: Campus[];
}

// Nueva interfaz para el estado interno del componente
export interface EnhancedCourseSelection {
  code: string;
  campusGroups: CampusGroup[];
}

export interface CampusGroup {
  id: string; // UUID único para cada grupo
  campuses: string[]; // Array de nombres de campus
  typeOfGroups: string[]; // Array de tipos de grupo
}

export interface CourseNameAndCode {
  code: string;
  name: string;
}

export interface CampusConfig {
  name: string;
  typeOfGroup: string;
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

export interface SimpleCourseRow extends CommonScheduleRow {
  campus: string;
  department: string;
  modeId: string;
  mode: string;
}

export interface AutoScheduleState {
  studentId: string | null;
  availableCourses: CourseNameAndCode[];
  selectedCourses: SelectedCourse[];
  scheduleCombinations: SimpleCourseRow[][];
  currentCombination: number;
  isLoading: boolean;
  isGenerating: boolean;
  errors: string[];
}