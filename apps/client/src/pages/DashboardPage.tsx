import { Suspense } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "@/hooks"
import { SectionCard } from "@/components"
import { CoursesTable } from "@/components/courses/table"
import { Periods } from "@/components/periods"
import { Spinner } from "@nextui-org/react"

export function DashboardPage() {
  const { user, status } = useAuth()

  if (status === "unauthenticated") return <Navigate to="/auth" replace />
  if (status !== "authenticated") return <Spinner />

  return (
    <div className="home-main_grid gap-10">
      <SectionCard title="Semestres" className="h-min">
        <Suspense fallback={<Spinner />}>
          <Periods />
        </Suspense>
      </SectionCard>
      <SectionCard title="Cursos">
        <Suspense fallback={<Spinner />}>
          <CoursesTable user={user} />
        </Suspense>
      </SectionCard>
    </div>
  )
}