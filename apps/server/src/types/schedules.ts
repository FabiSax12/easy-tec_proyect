export interface Schedule {
    day: string;
    start: string;
    end: string;
}

export interface ScheduleRow {
    id: string;
    code: string;
    subject: string;
    group: number;
    credits: number;
    schedule: Schedule;
    schedules: Schedule[];
    classroom: string;
    teacher: string;
    teachers: string[];
    totalSpaces: number;
    typeOfSubject: string;
    typeOfGroup: string;
    reserved: number;
}

export interface SimpleCourseRow {
    id: string;
    campus: string;
    code: string;
    subject: string;
    group: number;
    department: string;
    credits: number;
    modeId: string;
    mode: string;
    typeOfGroup: string;
    teachers: string[];
    schedules: Schedule[];
}

export interface CompleteCourseRow {
    DSC_PLAN: string;
    DSC_SEDE: string;
    IDE_MATERIA: string;
    DSC_MATERIA: string;
    IDE_GRUPO: number;
    DSC_DEPTO: string;
    NUM_NIVEL: number;
    CAN_CREDITOS: number;
    HORAS: number;
    NOM_DIA: string;
    IDE_MODALIDAD: string;
    IDE_PER_MOD: number;
    NUM_ANO: number;
    IDE_EST_EST: number;
    DSC_MODALIDAD: string;
    TIPO_CURSO: string;
    HINICIO: string;
    HFIN: string;
    NOM_PROFESOR: string;
}

export interface MergedCourseRow extends Omit<CompleteCourseRow, "NOM_DIA" | "HINICIO" | "HFIN"> {
    HORARIOS: Schedule[];
    PROFESORES: string[];
}