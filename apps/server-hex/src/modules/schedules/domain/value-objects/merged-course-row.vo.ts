import { Schedule } from './schedule.vo';
/**
 * Represents a consolidated course row with multiple schedules, derived from raw data.
 * This is a Value Object.
 */
export class MergedCourseRow {
  /** @readonly */
  public readonly DSC_PLAN: string;
  /** @readonly */
  public readonly DSC_SEDE: string;
  /** @readonly */
  public readonly IDE_MATERIA: string;
  /** @readonly */
  public readonly DSC_MATERIA: string;
  /** @readonly */
  public readonly IDE_GRUPO: number;
  /** @readonly */
  public readonly DSC_DEPTO: string;
  /** @readonly */
  public readonly NUM_NIVEL: number;
  /** @readonly */
  public readonly CAN_CREDITOS: number;
  /** @readonly */
  public readonly HORAS: number; // Still might keep this from raw data? Or calculate?
  /** @readonly */
  public readonly IDE_MODALIDAD: string;
  /** @readonly */
  public readonly IDE_PER_MOD: number;
  /** @readonly */
  public readonly NUM_ANO: number;
  /** @readonly */
  public readonly IDE_EST_EST: number;
  /** @readonly */
  public readonly DSC_MODALIDAD: string;
  /** @readonly */
  public readonly TIPO_CURSO: string;
  /** @readonly */
  public readonly NOM_PROFESOR: string; // If a single teacher per group

  /**
   * The consolidated list of schedules for this course group.
   * @readonly
   */
  public readonly HORARIOS: Schedule[]; // Array of Schedule VOs


  /**
   * Creates an instance of MergedCourseRow.
   * @param props - The properties to initialize the MergedCourseRow VO.
   * @param props.HORARIOS - An array of Schedule VO instances.
   * @throws Error if required properties are missing or nested VOs are invalid.
   */
  constructor(props: {
    DSC_PLAN: string;
    DSC_SEDE: string;
    IDE_MATERIA: string;
    DSC_MATERIA: string;
    IDE_GRUPO: number;
    DSC_DEPTO: string;
    NUM_NIVEL: number;
    CAN_CREDITOS: number;
    HORAS: number;
    IDE_MODALIDAD: string;
    IDE_PER_MOD: number;
    NUM_ANO: number;
    IDE_EST_EST: number;
    DSC_MODALIDAD: string;
    TIPO_CURSO: string;
    NOM_PROFESOR: string;
    HORARIOS: Schedule[]; // Expecting an array of Schedule VO instances
  }) {
    // Add basic validation if needed
    if (!props.IDE_MATERIA || !props.DSC_MATERIA || !props.DSC_SEDE || !props.HORARIOS || props.HORARIOS.length === 0) {
      throw new Error("MergedCourseRow basic properties or schedules cannot be empty.");
    }

    this.DSC_PLAN = props.DSC_PLAN;
    this.DSC_SEDE = props.DSC_SEDE;
    this.IDE_MATERIA = props.IDE_MATERIA;
    this.DSC_MATERIA = props.DSC_MATERIA;
    this.IDE_GRUPO = props.IDE_GRUPO;
    this.DSC_DEPTO = props.DSC_DEPTO;
    this.NUM_NIVEL = props.NUM_NIVEL;
    this.CAN_CREDITOS = props.CAN_CREDITOS;
    this.HORAS = props.HORAS;
    this.IDE_MODALIDAD = props.IDE_MODALIDAD;
    this.IDE_PER_MOD = props.IDE_PER_MOD;
    this.NUM_ANO = props.NUM_ANO;
    this.IDE_EST_EST = props.IDE_EST_EST;
    this.DSC_MODALIDAD = props.DSC_MODALIDAD;
    this.TIPO_CURSO = props.TIPO_CURSO;
    this.NOM_PROFESOR = props.NOM_PROFESOR;
    this.HORARIOS = props.HORARIOS;

    // Ensure nested schedules are instances of Schedule VO
    if (!this.HORARIOS.every(s => s instanceof Schedule)) throw new Error("HORARIOS must be an array of Schedule VO instances.");
  }
}

