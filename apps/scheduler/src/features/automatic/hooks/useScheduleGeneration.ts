import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { axiosClient } from '@/api/axios.config';
import { generateCombinations } from '@/utils/get-schdule-combinations';
import { SimpleCourseRow, SelectedCourse } from '../types/auto-schedule-types';

export const useScheduleGeneration = () => {
  const [scheduleCombinations, setScheduleCombinations] = useState<SimpleCourseRow[][]>([]);
  const [currentCombination, setCurrentCombination] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const generateSchedules = useCallback(async (
    studentId: string | null,
    selectedCourses: SelectedCourse[]
  ) => {
    if (!studentId) {
      setErrors(['ID de estudiante no válido.']);
      return;
    }

    setErrors([]);
    setIsGenerating(true);
    setScheduleCombinations([]);

    try {
      const response = await axiosClient.post(`/api/schedules/${studentId}`, selectedCourses);
      const data = response.data as SimpleCourseRow[];

      if (data.length === 0) {
        setErrors(['No se encontraron horarios disponibles para los cursos seleccionados.']);
        return;
      }

      // Group courses by code
      const coursesGroupedByCode = data.reduce((acc, course) => {
        if (!acc[course.code]) acc[course.code] = [];
        acc[course.code].push(course);
        return acc;
      }, {} as Record<string, SimpleCourseRow[]>);

      // Generate combinations
      const combinations: SimpleCourseRow[][] = [];
      generateCombinations(coursesGroupedByCode, 0, [], combinations);

      setScheduleCombinations(combinations);
      setCurrentCombination(0);

      return combinations;
    } catch (error) {
      console.error('Error generating schedules:', error);

      if (error instanceof AxiosError) {
        setErrors([error.response?.data?.message || 'Error al generar los horarios.']);
      } else {
        setErrors(['Error al generar los horarios.']);
      }
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const navigateCombination = useCallback((direction: 'prev' | 'next') => {
    setCurrentCombination(prev => {
      if (direction === 'prev') {
        return Math.max(0, prev - 1);
      } else {
        return Math.min(scheduleCombinations.length - 1, prev + 1);
      }
    });
  }, [scheduleCombinations.length]);

  const clearSchedules = useCallback(() => {
    setScheduleCombinations([]);
    setCurrentCombination(0);
    setErrors([]);
  }, []);

  return {
    scheduleCombinations,
    currentCombination,
    isGenerating,
    errors,
    generateSchedules,
    navigateCombination,
    clearSchedules,
    setErrors,
  };
};