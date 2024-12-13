import { Skeleton } from "@nextui-org/react"

export const PeriodsSkeleton = () => {
  return <div className="flex gap-6 scroll-smooth">
    {Array.from({ length: 5 }).map((_, index) => (
      <Skeleton
        key={index}
        className="min-w-80 min-h-36 flex flex-col justify-between border-2 border-default-200 rounded-xl group"
      />
    ))}
  </div>
}
