import { useEffect, useState } from "react"
import { Button, Card, CardBody, Form } from "@easy-tec/ui"
import { axiosClient } from "@/api/axios.config.ts"
import { CourseNameAndCode, SimpleCourseRow, SelectedCourse } from "@/interfaces/courses-schedule.ts"
import { StudentCoursesForm } from "@/components/StudentCoursesForm"
import { SelectedCoursesList } from "@/components/SelectedCoursesList"
import { AutoScheduleView } from "@/components/schedule-views/AutoScheduleView"
import { generateCombinations } from "@/utils/get-schdule-combinations"
import { AxiosError } from "axios"

export const AutoSchedulesPage = () => {
	const [studentId, setStudentId] = useState<string | null>(null)
	const [availableCourses, setAvailableCourses] = useState<CourseNameAndCode[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [isGenerating, setIsGenerating] = useState(false)
	const [errors, setErrors] = useState<string[]>([])
	const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([{ code: "", campus: [] }])
	const [scheduleCombinations, setScheduleCombinations] = useState<SimpleCourseRow[][]>([])
	const [currentCombination, setCurrentCombination] = useState(0)

	useEffect(() => {
		const storedAvailableCourses = localStorage.getItem("availableCourses")

		if (storedAvailableCourses) {
			const parsedCourses = JSON.parse(storedAvailableCourses) as CourseNameAndCode[]
			setAvailableCourses(parsedCourses)
		}
	}, [])

	const getStudentAvailableCourses = async (studentId: string) => {
		setStudentId(studentId)
		try {
			setIsLoading(true)
			const response = await axiosClient.get(`api/schedules/availables/${studentId}`)
			const data = response.data as CourseNameAndCode[]
			localStorage.setItem("studentId", studentId)
			localStorage.setItem("availableCourses", JSON.stringify(data))
			setAvailableCourses(data.sort((a, b) => a.name.localeCompare(b.name)))
		} catch (e) {
			console.error(e)
			setAvailableCourses([])
			localStorage.removeItem("availableCourses")
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

	const generateSchedules = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setErrors([])

		if (selectedCourses.some((course) => course.code === "" || course.campus.some((c) => c.name === "" || c.typeOfGroup === ""))) {
			setErrors(["Por favor, completa todos los campos de los cursos seleccionados."])
			return
		}

		try {
			setIsGenerating(true)
			setScheduleCombinations([])
			const response = await axiosClient.post(`/api/schedules/${studentId}`, selectedCourses)
			const data = response.data as SimpleCourseRow[]

			console.log("Horarios generados:", data)

			if (data.length === 0) {
				setErrors(["No se encontraron horarios disponibles para los cursos seleccionados."])
				return
			}

			const coursesGroupedByCode = data.reduce((acc, course) => {
				if (!acc[course.code]) acc[course.code] = []
				acc[course.code].push(course)
				return acc
			}, {} as Record<string, SimpleCourseRow[]>)

			const combinations: SimpleCourseRow[][] = []
			generateCombinations(coursesGroupedByCode, 0, [], combinations)
			setScheduleCombinations(combinations)
			setCurrentCombination(0)
		} catch (error) {
			console.error(error)
			if (error instanceof AxiosError) {
				setErrors([error.response?.data.message || "Error al generar los horarios."])
			} else {
				setErrors(["Error al generar los horarios."])
			}
		} finally {
			setIsGenerating(false)
		}
	}

	const handlePrev = () => {
		if (currentCombination > 0) setCurrentCombination(currentCombination - 1)
	}

	const handleNext = () => {
		if (currentCombination < scheduleCombinations.length - 1) setCurrentCombination(currentCombination + 1)
	}

	return (
		<div className="flex flex-col xl:grid xl:grid-cols-2 gap-4">
			<Card className="col-span-1">
				<CardBody className="flex flex-col flex-wrap gap-2">
					<StudentCoursesForm onSubmit={getStudentAvailableCourses} isLoading={isLoading} />
					<Form onSubmit={generateSchedules} validationBehavior="native">
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
						<Button isLoading={isGenerating} color="success" variant="flat" type="submit" fullWidth>
							{isGenerating ? "Generando..." : "Generar horarios"}
						</Button>
						{errors.length > 0 && (
							<div className="text-red-500">
								{errors.map((error, index) => (
									<p key={index}>{error}</p>
								))}
							</div>
						)}
					</Form>
				</CardBody>
			</Card>
			<Card className="col-span-1">
				<CardBody className="flex flex-col justify-center items-center flex-1 relative">
					<AutoScheduleView
						isGenerating={isGenerating}
						scheduleCombinations={scheduleCombinations}
						currentCombination={currentCombination}
						onPrev={handlePrev}
						onNext={handleNext}
					/>
				</CardBody>
			</Card>
		</div>
	)
}
