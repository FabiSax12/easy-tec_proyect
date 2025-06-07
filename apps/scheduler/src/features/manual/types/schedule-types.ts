import { carriersOptions, subjectsOptions } from "../data/schedule-options";

export type CarrierOption = typeof carriersOptions[keyof typeof carriersOptions];
export type SubjectOption = typeof subjectsOptions[keyof typeof subjectsOptions];

export interface ScheduleFilters {
  campus: string | null;
  carrier: string | null;
  period: string | null;
}

export interface SelectOption {
  key: string;
  label: string;
}