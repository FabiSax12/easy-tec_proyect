import { Suspense } from "react"
import { useParams } from "react-router"
import { SectionCard, Spinner } from "@/shared/components"
import { CoursesTable } from "@/modules/course/components"
import { Trello } from "@/modules/task/components"
import { TasksTable } from "@/modules/task/components/TasksTable"
import { Tab, Tabs } from "@easy-tec/ui"
import { LuKanban, LuTableProperties } from "react-icons/lu"

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
      <Tabs aria-label="Options" radius="full" color="primary" size="lg" variant="underlined">
        <Tab
          key="kanban"
          title={
            <div className="flex items-center gap-2">
              <LuKanban />
              <span>Kanban</span>
            </div>
          }
        >
          <Suspense fallback={<Spinner color="primary" label="Obteniendo Entergas..." />}>
            <Trello period={id} />
          </Suspense>
        </Tab>
        <Tab
          key="table"
          title={
            <div className="flex items-center gap-2">
              <LuTableProperties />
              <span>Table</span>
            </div>
          }
        >
          <TasksTable periodCode={id} />
        </Tab>
      </Tabs>
    </SectionCard>
  </div >
}