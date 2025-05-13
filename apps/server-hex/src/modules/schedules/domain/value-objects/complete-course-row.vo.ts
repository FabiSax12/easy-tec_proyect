/**
* Represents a row in the detailed course format received from the external service.
* This is a Value Object. Note: this structure appears normalized, potentially
* requiring merging schedules for a full course representation.
*/
export class CompleteCourseRow {
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
  public readonly HORAS: number; // Hours per schedule block?
  /** @readonly */
  public readonly NOM_DIA: string;
  /** @readonly */
  public readonly IDE_MODALIDAD: string;
  /** @readonly */
  public readonly IDE_PER_MOD: number; // Period/Modality ID?
  /** @readonly */
  public readonly NUM_ANO: number;
  /** @readonly */
  public readonly IDE_EST_EST: number; // Student Status ID?
  /** @readonly */
  public readonly DSC_MODALIDAD: string;
  /** @readonly */
  public readonly TIPO_CURSO: string;
  /** @readonly */
  public readonly HINICIO: string; // Start time string
  /** @readonly */
  public readonly HFIN: string;   // End time string
  /** @readonly */
  public readonly NOM_PROFESOR: string;


  /**
  * Creates an instance of CompleteCourseRow.
  * @param props - The properties to initialize the CompleteCourseRow VO.
  * @throws Error if required properties are missing.
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
  }) {
    // Add basic validation if needed
    if (!props.IDE_MATERIA || !props.DSC_MATERIA || !props.DSC_SEDE || !props.NOM_DIA) {
      throw new Error("CompleteCourseRow basic properties cannot be empty.");
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
    this.NOM_DIA = props.NOM_DIA;
    this.IDE_MODALIDAD = props.IDE_MODALIDAD;
    this.IDE_PER_MOD = props.IDE_PER_MOD;
    this.NUM_ANO = props.NUM_ANO;
    this.IDE_EST_EST = props.IDE_EST_EST;
    this.DSC_MODALIDAD = props.DSC_MODALIDAD;
    this.TIPO_CURSO = props.TIPO_CURSO;
    this.HINICIO = props.HINICIO;
    this.HFIN = props.HFIN;
    this.NOM_PROFESOR = props.NOM_PROFESOR;
  }
}

