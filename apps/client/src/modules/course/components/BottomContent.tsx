import { Pagination } from "@easy-tec/ui"

interface Props {
  hasSearchFilter: boolean;
  page: number;
  pages: number;
  setPage: (page: number) => void;
}

export const BottomContent = ({ hasSearchFilter, page, pages, setPage }: Props) => {
  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <Pagination
        showControls
        classNames={{
          cursor: "bg-foreground text-background",
        }}
        color="default"
        isDisabled={hasSearchFilter}
        page={page}
        total={pages}
        variant="light"
        onChange={setPage}
      />
    </div>
  )
}