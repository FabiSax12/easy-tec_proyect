import { Button } from "@nextui-org/react"
import { BiPlus } from "react-icons/bi"

interface Props {
  toggleModal: () => void
}

export const TrelloColumnFooter = ({ toggleModal }: Props) => {
  return (
    <Button
      onClick={toggleModal}
      endContent={< BiPlus />}
      color="default"
      variant="flat"
      radius="lg"
      className="shadow-small hover:text-primary h-10 min-h-[40px]"
    >
      Añadir
    </Button >
  )
}