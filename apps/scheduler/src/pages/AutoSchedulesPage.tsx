import { useEffect, useState } from "react"
import { Button, Card, CardBody, Form } from "@easy-tec/ui"
import { axiosClient } from "@/api/axios.config.ts"
import { CourseNameAndCode, SimpleCourseRow, SelectedCourse } from "@/interfaces/courses-schedule.ts"
import { StudentCoursesForm } from "@/features/automatic/components/StudentCoursesForm"
import { SelectedCoursesList } from "@/features/automatic/components/SelectedCoursesList"
import { AutoScheduleView } from "@/components/schedule-views/AutoScheduleView"
import { generateCombinations } from "@/utils/get-schdule-combinations"
import { AxiosError } from "axios"
// import { driver, DriveStep } from "driver.js"
// import "driver.js/dist/driver.css";

// const initialTourSteps: DriveStep[] = [
// 	{
// 		element: "#input-student-id",
// 		popover: {
// 			title: "Tu Carnet",
// 			description:
// 				"Con tu carnet, podrás buscar unicamente entre los cursos que necesitas para tu carrera.",
// 		},
// 	},
// 	{
// 		element: "#btn-search-student",
// 		popover: {
// 			title: "Buscar tus cursos",
// 			description:
// 				"Haz clic aquí para buscar los cursos disponibles para tu carrera. Esto cargará los cursos que puedes seleccionar.",
// 		},
// 	},
// 	{
// 		element: "#container-selected-courses",
// 		popover: {
// 			title: "Selecciona tus cursos",
// 			description:
// 				"Aquí puedes seleccionar los cursos que deseas incluir en tu horario, sin especificar un grupo. El trabajo de las combinaciones se hará automáticamente.",
// 		},
// 	},
// 	{
// 		element: "#autocomplete-course-0",
// 		popover: {
// 			title: "Selecciona un curso",
// 			description:
// 				"Especifica unicamente los cursos que deseas incluir en tu horario. Puedes agregar más cursos haciendo clic en el botón \"Agregar curso\".",
// 		},
// 	},
// ];

// const courseAddedTourSteps: DriveStep[] = [
// 	{
// 		element: "#autocomplete-course-0", // Or a more specific element related to the added course
// 		popover: {
// 			title: "Curso Seleccionado",
// 			description:
// 				"¡Excelente! Has seleccionado un curso. Ahora puedes definir su campus y tipo de grupo.",
// 		},
// 	},
// 	{
// 		element: '#select-campus-0-0',
// 		popover: {
// 			title: "Selecciona el Campus",
// 			description: "Elige los campus donde estés dispuesto a tomar el curso. Puedes seleccionar más de uno.",
// 		}
// 	},
// 	{
// 		element: '#select-type-of-group-0-0',
// 		popover: {
// 			title: "Selecciona el Tipo de Grupo",
// 			description: "Para cada conjunto de campus, selecciona las modalidades de grupo que necesites.",
// 		}
// 	},
// 	{
// 		element: "#btn-add-course",
// 		popover: {
// 			title: "Agregar Más Cursos",
// 			description:
// 				"Si necesitas seleccionar más cursos, puedes hacerlo usando este botón.",
// 		},
// 	},
// 	{
// 		element: "#btn-generate-schedules",
// 		popover: {
// 			title: "Generar Horarios",
// 			description:
// 				"Una vez que hayas agregado todos los cursos deseados, haz clic aquí para generar las combinaciones de horarios.",
// 		},
// 	},
// ];

export const AutoSchedulesPage = () => {
	const [studentId, setStudentId] = useState<string | null>(null)
	const [availableCourses, setAvailableCourses] = useState<CourseNameAndCode[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [isGenerating, setIsGenerating] = useState(false)
	const [errors, setErrors] = useState<string[]>([])
	const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([{ code: "", campus: [] }])
	const [scheduleCombinations, setScheduleCombinations] = useState<SimpleCourseRow[][]>([])
	const [currentCombination, setCurrentCombination] = useState(0)

	// const pageTourDriver = driver({
	// 	showProgress: true,
	// 	steps: initialTourSteps,
	// 	onDestroyed: () => {
	// 		const tours = JSON.parse(localStorage.getItem("tours") || "{}")
	// 		localStorage.setItem("tours", JSON.stringify({ ...tours, initialTourSteps: true }))
	// 	}
	// });

	useEffect(() => {
		const storedAvailableCourses = localStorage.getItem("availableCourses")

		if (storedAvailableCourses) {
			const parsedCourses = JSON.parse(storedAvailableCourses) as CourseNameAndCode[]
			setAvailableCourses(parsedCourses)
		}

		// if (localStorage.getItem("tours") === null || !JSON.parse(localStorage.getItem("tours") || "{}").initialTourSteps) {
		// 	console.log(pageTourDriver.getConfig())
		// 	pageTourDriver.drive();
		// 	console.log("Drivigng tour")
		// }
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
		if (code && selectedCourses[index].campus.length === 0) {
			updatedCourses[index].campus.push({ name: "", typeOfGroup: "" })
		}

		if (index === 0 && code) {
			// if (pageTourDriver.isActive()) {
			// 	pageTourDriver.destroy();
			// }
			// pageTourDriver.setConfig({
			// 	showProgress: true,
			// 	steps: courseAddedTourSteps,
			// 	onDestroyed: () => {
			// 		const tours = JSON.parse(localStorage.getItem("tours") || "{}")
			// 		localStorage.setItem("tours", JSON.stringify({ ...tours, courseAddedTourSteps: true }))
			// 	}
			// })
			// pageTourDriver.drive();
		}
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
						<Button id="btn-generate-schedules" isLoading={isGenerating} color="success" variant="flat" type="submit" fullWidth>
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
