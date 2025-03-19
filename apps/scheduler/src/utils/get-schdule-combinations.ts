import { Schedule, SimpleCourseRow } from "@/interfaces/courses-schedule"

function hasConflict(schedule1: Schedule, schedule2: Schedule) {
  if (schedule1.day !== schedule2.day) return false
  return schedule1.end > schedule2.start && schedule1.start < schedule2.end
}

function isValidCombination(selectedGroups: SimpleCourseRow[]) {
  for (let i = 0; i < selectedGroups.length; i++) {
    for (let j = i + 1; j < selectedGroups.length; j++) {
      const schedules1 = selectedGroups[i].schedules
      const schedules2 = selectedGroups[j].schedules
      for (const schedule1 of schedules1) {
        for (const schedule2 of schedules2) {
          if (hasConflict(schedule1, schedule2)) return false
        }
      }
    }
  }
  return true
}

export function generateCombinations(
  courses: Record<string, SimpleCourseRow[]>,
  index = 0,
  currentCombination: SimpleCourseRow[] = [],
  combinations: SimpleCourseRow[][] = []
) {
  const courseCodes = Object.keys(courses)
  if (index === courseCodes.length) {
    if (isValidCombination(currentCombination)) {
      combinations.push([...currentCombination])
    }
    return
  }
  const courseGroups = courses[courseCodes[index]]
  for (const group of courseGroups) {
    currentCombination.push(group)
    generateCombinations(courses, index + 1, currentCombination, combinations)
    currentCombination.pop()
  }
}