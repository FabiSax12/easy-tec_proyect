export interface Period {
  readonly id: number;
  type: string;
  typeId: number;
  startDate: Date;
  endDate: Date;
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
