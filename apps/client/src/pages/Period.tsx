import { Suspense } from "react"
import { useParams } from "react-router-dom"
import { SectionCard, Spinner } from "@/components"
import { CoursesMainTable } from "@/components/courses"

export const Period = () => {
  const { id } = useParams()

  return <div className="flex flex-col gap-5">
    <SectionCard title={`Cursos ${id}`} className="whitespace-nowrap">
      <Suspense fallback={<Spinner color="primary" label="Obteniendo cursos..." />}>
        <CoursesMainTable filter={{ period: id }} />
        <div>Courses table</div>
      </Suspense>
    </SectionCard>

    <SectionCard title={`Entregas ${id}`} className="whitespace-nowrap">
      <Suspense fallback={<Spinner color="primary" label="Obteniendo Entergas..." />}>
        {/* <Trello period={id} /> */}
        <div>Trello</div>
      </Suspense>
    </SectionCard>
  </div>
}