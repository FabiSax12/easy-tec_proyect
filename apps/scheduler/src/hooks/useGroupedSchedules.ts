import { useMemo, useState, useCallback } from "react";
import { GroupedCourse, ScheduleRow } from "@/interfaces/courses-schedule";

const groupSchedulesByCourse = (schedules: ScheduleRow[]): GroupedCourse[] => {
  if (!schedules?.length) return [];

  const grouped = schedules.reduce((acc, schedule) => {
    if (!acc[schedule.code]) {
      acc[schedule.code] = {
        code: schedule.code,
        subject: schedule.subject,
        credits: schedule.credits,
        typeOfSubject: schedule.typeOfSubject,
        groups: [],
      };
    }
    acc[schedule.code].groups.push(schedule);
    return acc;
  }, {} as Record<string, GroupedCourse>);

  return Object.values(grouped)
    .map(course => ({
      ...course,
      groups: course.groups.sort((a, b) => a.group - b.group)
    }))
    .sort((a, b) => a.code.localeCompare(b.code));
};

export const useGroupedSchedules = (schedules: ScheduleRow[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const groupedCourses = useMemo(
    () => groupSchedulesByCourse(schedules),
    [schedules]
  );

  const filteredCourses = useMemo(() => {
    if (!searchTerm.trim()) return groupedCourses;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return groupedCourses.filter(course =>
      course.subject.toLowerCase().includes(lowerSearchTerm) ||
      course.code.toLowerCase().includes(lowerSearchTerm)
    );
  }, [groupedCourses, searchTerm]);

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
    setPage(1);
  }, []);

  const resetPage = useCallback(() => setPage(1), []);

  return {
    groupedCourses,
    filteredCourses,
    searchTerm,
    page,
    setPage,
    handleSearch,
    resetPage,
  };
};