import { Suspense } from "react"
import { useParams } from "react-router-dom"
import { SectionCard, Spinner } from "@/shared/components"
import { CoursesTable } from "@/modules/course/components"
import { Trello } from "@/modules/task/components"

export const Period = () => {
  const { id } = useParams()

  if (!id) return null

  return <div className="flex flex-col gap-5">
    <SectionCard title={`Cursos ${id}`} className="whitespace-nowrap">
      <Suspense fallback={<Spinner color="primary" label="Obteniendo cursos..." />}>
        <CoursesTable filter={{ period: id }} />
      </Suspense>
    </SectionCard>

    <SectionCard title={`Entregas ${id}`} className="whitespace-nowrap">
      <Suspense fallback={<Spinner color="primary" label="Obteniendo Entergas..." />}>
        <Trello period={id} />
      </Suspense>
    </SectionCard>
  </div>
}