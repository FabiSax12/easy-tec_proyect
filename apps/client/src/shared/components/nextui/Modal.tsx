import { Modal, ModalProps } from "@heroui/react"

export const CustomModal = (props: ModalProps) => (
  <Modal
    radius="sm"
    backdrop="opaque"
    shadow="lg"
    motionProps={{
      variants: {
        enter: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.1, ease: "easeOut", }

        },
        exit: {
          y: -20,
          opacity: 0,
          transition: { duration: 0.1, ease: "easeIn" }
        }
      }
    }}
    {...props}
  >
    {props.children}
  </Modal>
)