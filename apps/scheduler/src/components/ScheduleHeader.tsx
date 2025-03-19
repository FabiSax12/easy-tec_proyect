export const ScheduleHeader = ({ days }: { days: string[] }) => (
  <>
    <div className="p-3 font-bold text-center bg-default-100 rounded-tl-lg"></div>
    {days.map((day) => (
      <div key={day} className="p-3 font-bold text-center bg-default-100 border-l border-divider">
        {day}
      </div>
    ))}
  </>
)