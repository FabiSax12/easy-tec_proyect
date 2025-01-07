interface Props {
  children: React.ReactNode
}

export function SidebarWrapper({ children }: Props) {
  return (
    <aside className={"flex flex-col justify-center items-center z-50 h-screen transition-all w-16 sticky top-0 left-0"}>
      <nav className="flex flex-col bg-white shadow-sm">
        <ul className="flex-1 px-3 flex flex-col gap-6">{children}</ul>
      </nav>
    </aside >
  )
}
