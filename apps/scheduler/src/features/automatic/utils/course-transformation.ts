
import { CampusGroup, EnhancedCourseSelection } from '../types/auto-schedule-types';
import { SelectedCourse } from '@/interfaces/courses-schedule';

/**
 * Convierte la selección interna mejorada al formato que espera el backend
 */
export const transformToBackendFormat = (enhancedCourses: EnhancedCourseSelection[]): SelectedCourse[] => {
  return enhancedCourses.map(course => ({
    code: course.code,
    campus: course.campusGroups.flatMap(group =>
      group.campuses.flatMap(campusName =>
        group.typeOfGroups.map(typeOfGroup => ({
          name: campusName,
          typeOfGroup
        }))
      )
    )
  }));
};

/**
 * Convierte del formato backend al formato interno mejorado
 */
export const transformFromBackendFormat = (backendCourses: SelectedCourse[]): EnhancedCourseSelection[] => {
  return backendCourses.map(course => {
    // Agrupar por tipos de grupo para optimizar la visualización
    const groupedByCampus = course.campus.reduce((acc, item) => {
      if (!acc[item.name]) {
        acc[item.name] = [];
      }
      acc[item.name].push(item.typeOfGroup);
      return acc;
    }, {} as Record<string, string[]>);

    // Intentar agrupar campus que tienen los mismos tipos de grupo
    const campusGroups: CampusGroup[] = [];
    const processedCampuses = new Set<string>();

    Object.entries(groupedByCampus).forEach(([campusName, typeOfGroups]) => {
      if (processedCampuses.has(campusName)) return;

      // Buscar otros campus con exactamente los mismos tipos de grupo
      const matchingCampuses = [campusName];
      const typeOfGroupsSet = new Set(typeOfGroups);

      Object.entries(groupedByCampus).forEach(([otherCampus, otherTypes]) => {
        if (otherCampus !== campusName && !processedCampuses.has(otherCampus)) {
          const otherTypesSet = new Set(otherTypes);
          if (
            typeOfGroupsSet.size === otherTypesSet.size &&
            [...typeOfGroupsSet].every(type => otherTypesSet.has(type))
          ) {
            matchingCampuses.push(otherCampus);
            processedCampuses.add(otherCampus);
          }
        }
      });

      matchingCampuses.forEach(campus => processedCampuses.add(campus));

      campusGroups.push({
        id: crypto.randomUUID(),
        campuses: matchingCampuses,
        typeOfGroups: [...typeOfGroupsSet]
      });
    });

    return {
      code: course.code,
      campusGroups
    };
  });
};