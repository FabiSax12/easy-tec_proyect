import { Suspense } from "react"
import { SectionCard } from "@/components"
import { CoursesMainTable, Spinner } from "@/components/nextui"
import { Trello } from "@/components/trello"
// import { Trello } from "@/components/trello/v2/Trello"

interface Props {
  params: { id: string }
}

export default async function Page({ params }: Props) {
  return <div className="flex flex-col gap-5">
    <SectionCard title={`Cursos ${params.id}`} className="whitespace-nowrap">
      <Suspense fallback={<Spinner color="primary" label="Obteniendo cursos..." />}>
        <CoursesMainTable filter={{ period: params.id }} />
      </Suspense>
    </SectionCard>

    <SectionCard title={`Entregas ${params.id}`} className="whitespace-nowrap">
      <Suspense fallback={<Spinner color="primary" label="Obteniendo Entergas..." />}>
        <Trello period={params.id} />
      </Suspense>
    </SectionCard>
  </div>
}