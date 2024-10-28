import { Suspense } from "react"
import { useParams } from "react-router-dom"
import { SectionCard, Spinner } from "@/components"
import { CoursesTable } from "@/components/courses/table"
import { useAuth } from "@/hooks"

export const Period = () => {
  const { id } = useParams()
  const { user } = useAuth()

  if (!user) return null

  return <div className="flex flex-col gap-5">
    <SectionCard title={`Cursos ${id}`} className="whitespace-nowrap">
      <Suspense fallback={<Spinner color="primary" label="Obteniendo cursos..." />}>
        <CoursesTable user={user} filter={{ period: id }} />
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