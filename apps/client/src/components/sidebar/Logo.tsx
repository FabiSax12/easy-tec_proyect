interface Props {
  expanded: boolean
}

export const Logo = ({ expanded }: Props) => {
  return <div className="overflow-hidden flex items-center gap-3">
    <img
      // width={20}
      // height={20}
      src="/logo.png"
      className={`overflow-hidden transition-all ${expanded ? "w-5" : "w-0"}`}
      alt=""
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