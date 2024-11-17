import { Task } from "@/types"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"

interface Props {
  task: Task & { course: { name: string } }
  isCardOpen: boolean
  setIsCardOpen: (value: boolean) => void
}

export const TaskCardInfo = ({ task, isCardOpen, setIsCardOpen }: Props) => {
  return (
    <Modal
      isOpen={isCardOpen}
      onOpenChange={setIsCardOpen}
      backdrop="opaque"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col">{task.name}</ModalHeader>
            <ModalBody>
              <div className="w-full flex items-center justify-between">
                <span className="text-xs text-default-600 whitespace-pre-wrap">
                  {task.course.name}
                </span>
                <span className="text-xs text-default-600 whitespace-pre-wrap">
                  {task.date.toLocaleDateString("es-ES", { day: "numeric", month: "short" })}
                </span>
              </div>
              <p className="text-sm font-semibold w-full whitespace-pre-wrap">
                {task.description}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal >
  )
}