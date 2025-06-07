import { useEffect } from "react";
import { useStudentCourses } from "@/features/automatic/hooks/useStudentCourses";
import { useSelectedCourses } from "@/features/automatic/hooks/useSelectedCourses";
import { useScheduleGeneration } from "@/features/automatic/hooks/useScheduleGeneration";
import { StudentCoursesPanel } from "@/features/automatic/components/StudentCoursesPanel";
import { ScheduleViewPanel } from "@/features/automatic/components/ScheduleViewPanel";
import { STORAGE_KEYS } from "@/features/automatic/constants/auto-schedule-constants";

export const AutoSchedulesPage = () => {
	// Custom hooks for state management
	const {
		studentId,
		availableCourses,
		isLoading,
		fetchStudentCourses,
		setAvailableCourses,
	} = useStudentCourses();

	const {
		selectedCourses,
		addCourse,
		removeCourse,
		updateCourseCode,
		addCampus,
		removeCampus,
		updateCampus,
		validateSelectedCourses,
	} = useSelectedCourses();

	const {
		scheduleCombinations,
		currentCombination,
		isGenerating,
		errors,
		generateSchedules,
		navigateCombination,
		setErrors,
	} = useScheduleGeneration();

	// Initialize from localStorage
	useEffect(() => {
		const storedCourses = localStorage.getItem(STORAGE_KEYS.AVAILABLE_COURSES);
		if (storedCourses) {
			try {
				const parsedCourses = JSON.parse(storedCourses);
				setAvailableCourses(parsedCourses);
			} catch (error) {
				console.error('Error parsing stored courses:', error);
				localStorage.removeItem(STORAGE_KEYS.AVAILABLE_COURSES);
			}
		}
	}, [setAvailableCourses]);

	// Handle student course fetching
	const handleFetchStudentCourses = async (id: string) => {
		try {
			await fetchStudentCourses(id);
		} catch (error) {
			console.error('Failed to fetch student courses:', error);
		}
	};

	// Handle schedule generation
	const handleGenerateSchedules = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const validationErrors = validateSelectedCourses();
		if (validationErrors.length > 0) {
			setErrors(validationErrors);
			return;
		}

		await generateSchedules(studentId, selectedCourses);
	};

	// Handle course code updates with potential tour logic
	const handleUpdateCourseCode = (index: number, code: string) => {
		updateCourseCode(index, code);
	};

	return (
		<div className="flex flex-col xl:grid xl:grid-cols-2 gap-4">
			<StudentCoursesPanel
				isLoading={isLoading}
				isGenerating={isGenerating}
				availableCourses={availableCourses}
				selectedCourses={selectedCourses}
				errors={errors}
				onFetchStudentCourses={handleFetchStudentCourses}
				onGenerateSchedules={handleGenerateSchedules}
				onAddCourse={addCourse}
				onUpdateCourseCode={handleUpdateCourseCode}
				onRemoveCourse={removeCourse}
				onAddCampus={addCampus}
				onUpdateCampus={updateCampus}
				onRemoveCampus={removeCampus}
			/>

			<ScheduleViewPanel
				isGenerating={isGenerating}
				scheduleCombinations={scheduleCombinations}
				currentCombination={currentCombination}
				onNavigate={navigateCombination}
			/>
		</div>
	);
};