import { useState, useCallback, useMemo } from "react";
import { campusOptions, carriersOptions, periodsOptions, subjectsOptions } from "@/features/manual/data/schedule-options";
import { ScheduleFilters, SelectOption, CarrierOption, SubjectOption } from "../types/schedule-types";

export const useScheduleFilters = () => {
  const [filters, setFilters] = useState<ScheduleFilters>({
    campus: null,
    carrier: null,
    period: null,
  });

  const updateFilter = useCallback((key: keyof ScheduleFilters, value: string | null) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      // Reset dependent filters
      ...(key === 'campus' && { carrier: null }),
    }));
  }, []);

  const setCampus = useCallback((value: string | null) => updateFilter('campus', value), [updateFilter]);
  const setCarrier = useCallback((value: string | null) => updateFilter('carrier', value), [updateFilter]);
  const setPeriod = useCallback((value: string | null) => updateFilter('period', value), [updateFilter]);

  const campusSelectOptions = useMemo((): SelectOption[] =>
    campusOptions.map(campus => ({ key: campus.code, label: campus.name })),
    []
  );

  const periodSelectOptions = useMemo((): SelectOption[] =>
    periodsOptions.map(period => ({ key: period.code, label: period.name })),
    []
  );

  const schoolsOptions = useMemo((): SelectOption[] => {
    if (!filters.campus) return [];

    const campusData = campusOptions.find(campusOption => campusOption.code === filters.campus);
    if (!campusData) return [];

    const getOptionsFromCodes = (codes: string[], options: Record<string, CarrierOption | SubjectOption>): SelectOption[] =>
      codes
        .map(code => options[code])
        .filter(Boolean)
        .map(option => ({ key: option.code, label: option.name }));

    const carriers = getOptionsFromCodes(campusData.carriers, carriersOptions);
    const subjects = getOptionsFromCodes(campusData.subjects, subjectsOptions);

    return [...carriers, ...subjects];
  }, [filters.campus]);

  const isFormValid = useMemo(() =>
    Boolean(filters.campus && filters.carrier && filters.period),
    [filters]
  );

  return {
    filters,
    setCampus,
    setCarrier,
    setPeriod,
    campusSelectOptions,
    schoolsOptions,
    periodSelectOptions,
    isFormValid,
  };
};