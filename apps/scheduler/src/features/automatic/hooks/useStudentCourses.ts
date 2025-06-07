import { useState, useCallback } from 'react';
import { axiosClient } from '@/api/axios.config';
import { CourseNameAndCode } from '../types/auto-schedule-types';
import { STORAGE_KEYS } from '../constants/auto-schedule-constants';

export const useStudentCourses = () => {
  const [studentId, setStudentId] = useState<string | null>(null);
  const [availableCourses, setAvailableCourses] = useState<CourseNameAndCode[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStudentCourses = useCallback(async (id: string) => {
    setStudentId(id);
    setIsLoading(true);

    try {
      const response = await axiosClient.get(`api/schedules/availables/${id}`);
      const data = response.data as CourseNameAndCode[];

      const sortedCourses = data.sort((a, b) => a.name.localeCompare(b.name));

      localStorage.setItem(STORAGE_KEYS.STUDENT_ID, id);
      localStorage.setItem(STORAGE_KEYS.AVAILABLE_COURSES, JSON.stringify(sortedCourses));

      setAvailableCourses(sortedCourses);
      return sortedCourses;
    } catch (error) {
      console.error('Error fetching student courses:', error);
      setAvailableCourses([]);
      localStorage.removeItem(STORAGE_KEYS.AVAILABLE_COURSES);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearCourses = useCallback(() => {
    setAvailableCourses([]);
    localStorage.removeItem(STORAGE_KEYS.AVAILABLE_COURSES);
  }, []);

  return {
    studentId,
    availableCourses,
    isLoading,
    fetchStudentCourses,
    clearCourses,
    setAvailableCourses,
  };
};
