import { useEffect } from "react";
import { useStudentCourses } from "@/features/automatic/hooks/useStudentCourses";
import { useScheduleGeneration } from "@/features/automatic/hooks/useScheduleGeneration";
import { StudentCoursesPanel } from "@/features/automatic/components/StudentCoursesPanel";
import { ScheduleViewPanel } from "@/features/automatic/components/ScheduleViewPanel";
import { STORAGE_KEYS } from "@/features/automatic/constants/auto-schedule-constants";
import { TourStyles } from "@/features/automatic/components/TourStyles";
import { TourHelpButton } from "@/features/automatic/components/TourHelpButton";
import { useAutoTours } from "@/features/automatic/hooks/useAutoTours";
import { useEnhancedCourseSelection } from "@/features/automatic/hooks/useEnhancedCourseSelection";

export const AutoSchedulesPage = () => {
	// Custom hooks for state management
	const {
		studentId,
		availableCourses,
		isLoading,
		fetchStudentCourses,
		setAvailableCourses,
	} = useStudentCourses();

	// const {
	// 	selectedCourses,
	// 	addCourse,
	// 	removeCourse,
	// 	updateCourseCode,
	// 	addCampus,
	// 	removeCampus,
	// 	updateCampus,
	// 	validateSelectedCourses,
	// } = useSelectedCourses();

	const {
		enhancedCourses: selectedCourses,
		addCourse,
		removeCourse,
		updateCourseCode,
		addCampusGroup: addCampus,
		removeCampusGroup: removeCampus,
		updateCampusGroup: updateCampus,
		validateCourses: validateSelectedCourses,
		getBackendFormat
	} = useEnhancedCourseSelection();

	const {
		scheduleCombinations,
		currentCombination,
		isGenerating,
		errors,
		generateSchedules,
		navigateCombination,
		setErrors,
	} = useScheduleGeneration();

	// Tour hooks
	const {
		startWelcomeTour,
		startStudentIdTour,
		startCourseSelectionTour,
		startCampusConfigTour,
		// startGenerateSchedulesTour,
		startSchedulesGeneratedTour,
		restartTour,
		shouldShowTour,
	} = useAutoTours();

	// Initialize tours and stored data
	useEffect(() => {
		// Load stored courses
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

		// Start welcome tour for new users
		if (shouldShowTour('welcome')) {
			setTimeout(() => {
				startWelcomeTour();
			}, 1000);
		}
	}, [setAvailableCourses, shouldShowTour, startWelcomeTour]);

	// Tour triggers based on user actions
	useEffect(() => {
		if (availableCourses.length > 0 && shouldShowTour('coursesLoaded')) {
			startCourseSelectionTour();
		}
	}, [availableCourses.length, shouldShowTour, startCourseSelectionTour]);

	useEffect(() => {
		if (scheduleCombinations.length > 0 && shouldShowTour('schedulesGenerated')) {
			startSchedulesGeneratedTour();
		}
	}, [scheduleCombinations.length, shouldShowTour, startSchedulesGeneratedTour]);

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

	// Enhanced handlers with tour integration
	const handleFetchStudentCourses = async (id: string) => {
		try {
			await fetchStudentCourses(id);

			// Trigger next tour step
			if (shouldShowTour('studentIdEntered')) {
				setTimeout(() => {
					startStudentIdTour();
				}, 500);
			}
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

		const backendFormat = getBackendFormat();
		await generateSchedules(studentId, backendFormat);
	};

	const handleUpdateCourseCode = (index: number, code: string) => {
		updateCourseCode(index, code);

		// Trigger campus configuration tour for first course
		if (index === 0 && code && shouldShowTour('firstCourseSelected')) {
			setTimeout(() => {
				startCampusConfigTour();
			}, 500);
		}
	};

	const handleUpdateCampus = (
		courseIndex: number, groupId: string, field: 'campuses' | 'typeOfGroups', values: string[]
	) => {
		updateCampus(courseIndex, groupId, field, values);

		// Check if we should show the generate schedules tour
		// const hasCompleteCourse = selectedCourses.some(course =>
		// 	course.code &&
		// 	course.campus.some(campus => campus.name && campus.typeOfGroup)
		// );

		// if (hasCompleteCourse && shouldShowTour('campusConfigured')) {
		// 	setTimeout(() => {
		// 		startGenerateSchedulesTour();
		// 	}, 800);
		// }
	};


	return (
		<>
			<TourStyles />
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
					onUpdateCampus={handleUpdateCampus}
					onRemoveCampus={removeCampus}
				/>

				<div className="schedule-view-container">
					<ScheduleViewPanel
						isGenerating={isGenerating}
						scheduleCombinations={scheduleCombinations}
						currentCombination={currentCombination}
						onNavigate={navigateCombination}
					/>
				</div>
			</div>

			<TourHelpButton onStartTour={restartTour} />
		</>
	);
};