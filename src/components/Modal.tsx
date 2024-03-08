import { useState } from 'react';
import { NextPage } from 'next';
import useUserInfo from "@/store/user";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { formatDate } from '@/utils/FormatDate';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

const ModalSemestre: NextPage<Props> = ({ isOpen, onOpenChange }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);

  const addSemester = useUserInfo((state) => state.addSemester);

  const onAccept = async () => {
    setLoading(true);
    const semestreData = {
      title,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    };
    try {
      setTimeout(() => {}, 2000)
      addSemester(semestreData);
      setTitle("");
      setStartDate("");
      setEndDate("");
      onOpenChange();
    } catch (error) {
      console.error("Error al añadir semestre:", error);
    } finally {
      setLoading(false);
    }
  };

  const canAddSemester = title && startDate && endDate;

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Añadir nuevo semestre</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Título"
                placeholder="Nombre del semestre"
                variant="bordered"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                label="Fecha de inicio"
                placeholder="Fecha Inicial"
                type="date"
                variant="bordered"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                label="Fecha de finalización"
                placeholder="Fecha final"
                type="date"
                variant="bordered"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={onAccept} isDisabled={!canAddSemester || loading} >
                {loading ? 'Añadiendo...' : 'Añadir'}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalSemestre;
