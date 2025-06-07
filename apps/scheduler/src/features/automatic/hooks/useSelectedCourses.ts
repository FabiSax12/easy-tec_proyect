import { useState, useCallback } from 'react';
import { SelectedCourse, CampusConfig } from '../types/auto-schedule-types';
import { DEFAULT_SELECTED_COURSE } from '../constants/auto-schedule-constants';

export const useSelectedCourses = () => {
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([
    { ...DEFAULT_SELECTED_COURSE }
  ]);

  const addCourse = useCallback(() => {
    setSelectedCourses(prev => [...prev, { ...DEFAULT_SELECTED_COURSE }]);
  }, []);

  const removeCourse = useCallback((courseIndex: number) => {
    setSelectedCourses(prev => prev.filter((_, index) => index !== courseIndex));
  }, []);

  const updateCourseCode = useCallback((index: number, code: string) => {
    setSelectedCourses(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], code };

      // Initialize campus array if code is set and campus is empty
      if (code && updated[index].campus.length === 0) {
        updated[index].campus = [{ name: "", typeOfGroup: "" }];
      }

      return updated;
    });
  }, []);

  const addCampus = useCallback((courseIndex: number) => {
    setSelectedCourses(prev => {
      const updated = [...prev];
      updated[courseIndex] = {
        ...updated[courseIndex],
        campus: [...updated[courseIndex].campus, { name: "", typeOfGroup: "" }]
      };
      return updated;
    });
  }, []);

  const removeCampus = useCallback((courseIndex: number, campusIndex: number) => {
    setSelectedCourses(prev => {
      const updated = [...prev];
      updated[courseIndex] = {
        ...updated[courseIndex],
        campus: updated[courseIndex].campus.filter((_, idx) => idx !== campusIndex)
      };
      return updated;
    });
  }, []);

  const updateCampus = useCallback((
    courseIndex: number,
    campusIndex: number,
    field: keyof CampusConfig,
    value: string
  ) => {
    setSelectedCourses(prev => {
      const updated = [...prev];
      updated[courseIndex] = {
        ...updated[courseIndex],
        campus: updated[courseIndex].campus.map((campus, idx) =>
          idx === campusIndex ? { ...campus, [field]: value } : campus
        )
      };
      return updated;
    });
  }, []);

  const validateSelectedCourses = useCallback((): string[] => {
    const errors: string[] = [];

    if (selectedCourses.length === 0) {
      errors.push('Debe seleccionar al menos un curso.');
      return errors;
    }

    const hasEmptyFields = selectedCourses.some(course =>
      !course.code ||
      course.campus.length === 0 ||
      course.campus.some(campus => !campus.name || !campus.typeOfGroup)
    );

    if (hasEmptyFields) {
      errors.push('Por favor, completa todos los campos de los cursos seleccionados.');
    }

    return errors;
  }, [selectedCourses]);

  return {
    selectedCourses,
    addCourse,
    removeCourse,
    updateCourseCode,
    addCampus,
    removeCampus,
    updateCampus,
    validateSelectedCourses,
  };
};