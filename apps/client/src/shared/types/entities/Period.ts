export interface Period {
  readonly id: number;
  readonly startDate: Date;
  readonly endDate: Date;

  type: string;
  number: number;
  year: number;
  code: string;
}

export interface CreatePeriodDto {
  type: string;
  typeId: number;
  startDate: Date;
  endDate: Date;
}

export interface UpdatePeriodDto {
  type?: string;
  typeId?: number;
  startDate?: Date;
  endDate?: Date;
}