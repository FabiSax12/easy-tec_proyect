import { useState } from "react"
import { SectionCard } from "@/components/ui"
import { Button } from "@easy-tec/ui"
import { axiosClient } from "@/api/axios.config.ts"
import { CourseNameAndCode, SimpleCourseRow, SelectedCourse } from "@/interfaces/courses-schedule.ts"
import { StudentCoursesForm } from "@/components/StudentCoursesForm"
import { SelectedCoursesList } from "@/components/SelectedCoursesList"
import { AutoScheduleView } from "@/components/schedule-views/AutoScheduleView"
import { generateCombinations } from "@/utils/get-schdule-combinations"

export const AutoSchedulesPage = () => {
	const [studentId, setStudentId] = useState<string | null>(null)
	const [availableCourses, setAvailableCourses] = useState<CourseNameAndCode[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([])
	const [scheduleCombinations, setScheduleCombinations] = useState<SimpleCourseRow[][]>([])
	const [currentCombination, setCurrentCombination] = useState(0)

	const getStudentAvailableCourses = async (studentId: string) => {
		setStudentId(studentId)
		try {
			setIsLoading(true)
			const response = await axiosClient.get(`api/schedules/availables/${studentId}`)
			const data = response.data as CourseNameAndCode[]
			setAvailableCourses(data.sort((a, b) => a.name.localeCompare(b.name)))
		} catch (e) {
			console.error(e)
			throw e
		} finally {
			setIsLoading(false)
		}
	}

	const addCourseRow = () => {
		setSelectedCourses([...selectedCourses, { code: "", campus: [{ name: "", typeOfGroup: "" }] }])
	}

	const updateCourseCode = (index: number, code: string) => {
		const updatedCourses = [...selectedCourses]
		updatedCourses[index].code = code
		setSelectedCourses(updatedCourses)
	}

	const updateCourseCampus = (courseIndex: number, campusIndex: number, field: "name" | "typeOfGroup", value: string) => {
		const updatedCourses = [...selectedCourses]
		updatedCourses[courseIndex].campus[campusIndex][field] = value
		setSelectedCourses(updatedCourses)
	}

	const removeCourseRow = (courseIndex: number) => {
		setSelectedCourses(selectedCourses.filter((_, index) => index !== courseIndex))
	}

	const addCampusRow = (courseIndex: number) => {
		const updatedCourses = [...selectedCourses]
		updatedCourses[courseIndex].campus.push({ name: "", typeOfGroup: "" })
		setSelectedCourses(updatedCourses)
	}

	const removeCampusRow = (courseIndex: number, campusIndex: number) => {
		const updatedCourses = [...selectedCourses]
		updatedCourses[courseIndex].campus = updatedCourses[courseIndex].campus.filter((_, idx) => idx !== campusIndex)
		setSelectedCourses(updatedCourses)
	}

	const generateSchedules = async () => {
		const response = await axiosClient.post(`/api/schedules/${studentId}`, selectedCourses)
		const data = response.data as SimpleCourseRow[]

		const coursesGroupedByCode = data.reduce((acc, course) => {
			if (!acc[course.code]) acc[course.code] = []
			acc[course.code].push(course)
			return acc
		}, {} as Record<string, SimpleCourseRow[]>)

		const combinations: SimpleCourseRow[][] = []
		generateCombinations(coursesGroupedByCode, 0, [], combinations)
		setScheduleCombinations(combinations)
		setCurrentCombination(0)
	}

	const handlePrev = () => {
		if (currentCombination > 0) setCurrentCombination(currentCombination - 1)
	}

	const handleNext = () => {
		if (currentCombination < scheduleCombinations.length - 1) setCurrentCombination(currentCombination + 1)
	}

	return (
		<div className="flex flex-col md:grid md:grid-cols-2 gap-4">
			<SectionCard className="flex flex-col flex-wrap gap-2">
				<StudentCoursesForm onSubmit={getStudentAvailableCourses} isLoading={isLoading} />
				<SelectedCoursesList
					isLoading={isLoading}
					availableCourses={availableCourses}
					selectedCourses={selectedCourses}
					onAddCourse={addCourseRow}
					onUpdateCourseCode={updateCourseCode}
					onRemoveCourse={removeCourseRow}
					onAddCampus={addCampusRow}
					onUpdateCampus={updateCourseCampus}
					onRemoveCampus={removeCampusRow}
				/>
				<Button color="success" variant="flat" onPress={generateSchedules}>
					Generar Horarios
				</Button>
			</SectionCard>
			<SectionCard className="flex flex-col justify-center items-center flex-1 relative">
				<AutoScheduleView
					scheduleCombinations={scheduleCombinations}
					currentCombination={currentCombination}
					onPrev={handlePrev}
					onNext={handleNext}
				/>
			</SectionCard>
		</div>
	)
}
