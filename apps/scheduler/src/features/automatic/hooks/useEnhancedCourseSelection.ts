import { useState, useCallback } from 'react';
import { EnhancedCourseSelection } from '@/features/automatic/types/auto-schedule-types';
import { transformToBackendFormat } from '@/features/automatic/utils/course-transformation';

export const useEnhancedCourseSelection = () => {
  const [enhancedCourses, setEnhancedCourses] = useState<EnhancedCourseSelection[]>([
    {
      code: "",
      campusGroups: []
    }
  ]);

  const addCourse = useCallback(() => {
    setEnhancedCourses(prev => [...prev, {
      code: "",
      campusGroups: []
    }]);
  }, []);

  const removeCourse = useCallback((courseIndex: number) => {
    setEnhancedCourses(prev => prev.filter((_, index) => index !== courseIndex));
  }, []);

  const updateCourseCode = useCallback((index: number, code: string) => {
    setEnhancedCourses(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        code,
        // Reset campus groups when course changes
        campusGroups: code ? updated[index].campusGroups : []
      };
      return updated;
    });
  }, []);

  const addCampusGroup = useCallback((courseIndex: number) => {
    setEnhancedCourses(prev => {
      const updated = [...prev];
      updated[courseIndex] = {
        ...updated[courseIndex],
        campusGroups: [
          ...updated[courseIndex].campusGroups,
          {
            id: crypto.randomUUID(),
            campuses: [],
            typeOfGroups: []
          }
        ]
      };
      return updated;
    });
  }, []);

  const removeCampusGroup = useCallback((courseIndex: number, groupId: string) => {
    setEnhancedCourses(prev => {
      const updated = [...prev];
      updated[courseIndex] = {
        ...updated[courseIndex],
        campusGroups: updated[courseIndex].campusGroups.filter(group => group.id !== groupId)
      };
      return updated;
    });
  }, []);

  const updateCampusGroup = useCallback((
    courseIndex: number,
    groupId: string,
    field: 'campuses' | 'typeOfGroups',
    values: string[]
  ) => {
    setEnhancedCourses(prev => {
      const updated = [...prev];
      updated[courseIndex] = {
        ...updated[courseIndex],
        campusGroups: updated[courseIndex].campusGroups.map(group =>
          group.id === groupId ? { ...group, [field]: values } : group
        )
      };
      return updated;
    });
  }, []);

  const validateCourses = useCallback((): string[] => {
    const errors: string[] = [];

    if (enhancedCourses.length === 0) {
      errors.push('Debe seleccionar al menos un curso.');
      return errors;
    }

    const hasEmptyFields = enhancedCourses.some(course =>
      !course.code ||
      course.campusGroups.length === 0 ||
      course.campusGroups.some(group =>
        group.campuses.length === 0 || group.typeOfGroups.length === 0
      )
    );

    if (hasEmptyFields) {
      errors.push('Por favor, completa todos los campos de los cursos seleccionados.');
    }

    return errors;
  }, [enhancedCourses]);

  // Función para obtener los datos en formato backend
  const getBackendFormat = useCallback(() => {
    return transformToBackendFormat(enhancedCourses);
  }, [enhancedCourses]);

  return {
    enhancedCourses,
    addCourse,
    removeCourse,
    updateCourseCode,
    addCampusGroup,
    removeCampusGroup,
    updateCampusGroup,
    validateCourses,
    getBackendFormat
  };
};