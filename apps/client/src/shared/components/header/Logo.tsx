interface Props {
  expanded: boolean
}

export const Logo = ({ expanded }: Props) => {
  return <div className="overflow-hidden flex items-center gap-3">
    <img
      src="/logo.png"
      className={`overflow-hidden transition-all ${expanded ? "w-5" : "w-0"}`}
      alt="App logo"
    />
    <h1
      className={`
        text-sm lg:text-lg overflow-hidden transition-all
        ${expanded ? "" : "w-0"}
      `}
    >
      EasyTec
    </h1>
  </div>
}