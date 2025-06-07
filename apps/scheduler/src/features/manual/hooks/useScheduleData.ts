import { useState, useCallback } from "react";
import { axiosClient } from "@/api/axios.config";
import { ScheduleRow } from "@/interfaces/courses-schedule";
import { ScheduleFilters } from "../types/schedule-types";

export const useScheduleData = () => {
  const [schedules, setSchedules] = useState<ScheduleRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSchedules = useCallback(async (filters: ScheduleFilters) => {
    if (!filters.campus || !filters.carrier || !filters.period) {
      return;
    }

    setSchedules([]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosClient.get<ScheduleRow[]>(
        `/api/schedules?campus=${filters.campus}&carrier=${filters.carrier}&period=${filters.period}`
      );

      const data = response.data;
      setSchedules(data || []);
    } catch (err) {
      setSchedules([]);
      setError('Error al cargar los horarios. Por favor, inténtalo de nuevo.');
      console.error('Error fetching schedules:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearSchedules = useCallback(() => {
    setSchedules([]);
    setError(null);
  }, []);

  return {
    schedules,
    isLoading,
    error,
    fetchSchedules,
    clearSchedules,
  };
};