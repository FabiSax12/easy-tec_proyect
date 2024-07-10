import { Button, Pagination, Selection } from "@nextui-org/react"
import { Course } from "@prisma/client"

interface Props {
  selectedKeys: Selection;
  filteredItems: Course[];
  page: number;
  pages: number;
  setPage: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export function TableBottomContent({
  selectedKeys, filteredItems, page, pages, setPage, onPreviousPage, onNextPage
}: Props) {
  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <span className="w-[30%] text-small text-default-400">
        {selectedKeys === "all"
          ? "Todos seleccionados"
          : `${selectedKeys.size} de ${filteredItems.length} seleccionados`}
      </span>
      <Pagination
        isCompact
        showControls
        showShadow
        color="primary"
        page={page}
        total={pages}
        onChange={setPage}
      />
      <div className="hidden sm:flex w-[30%] justify-end gap-2">
        <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
          Previous
        </Button>
        <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
          Next
        </Button>
      </div>
    </div>
  )
}