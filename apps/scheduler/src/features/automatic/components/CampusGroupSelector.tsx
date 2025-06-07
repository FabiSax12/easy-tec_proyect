import React from 'react';
import { Button } from '@easy-tec/ui';
import { IoTrashBin } from 'react-icons/io5';
import { CampusGroup } from '../types/auto-schedule-types';
import { MultiSelectField } from './MultiSelectField';

interface CampusGroupSelectorProps {
  courseIndex: number;
  group: CampusGroup;
  campusOptions: Array<{ key: string; label: string }>;
  modalityOptions: Array<{ key: string; label: string }>;
  onUpdateGroup: (courseIndex: number, groupId: string, field: 'campuses' | 'typeOfGroups', values: string[]) => void;
  onRemoveGroup: (courseIndex: number, groupId: string) => void;
}

export const CampusGroupSelector: React.FC<CampusGroupSelectorProps> = ({
  courseIndex,
  group,
  campusOptions,
  modalityOptions,
  onUpdateGroup,
  onRemoveGroup
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 rounded-lg ">
      <MultiSelectField
        id={`select-campus-${courseIndex}-${group.id}`}
        placeholder="Seleccionar Campus"
        selectedKeys={group.campuses}
        options={campusOptions}
        onSelectionChange={(values) => onUpdateGroup(courseIndex, group.id, 'campuses', values)}
        isRequired
        className="flex-1"
      />

      <MultiSelectField
        id={`select-modality-${courseIndex}-${group.id}`}
        placeholder="Seleccionar Modalidades"
        selectedKeys={group.typeOfGroups}
        options={modalityOptions}
        onSelectionChange={(values) => onUpdateGroup(courseIndex, group.id, 'typeOfGroups', values)}
        isRequired
        className="flex-1"
      />

      <Button
        startContent={<IoTrashBin />}
        size="sm"
        color="danger"
        isIconOnly
        onPress={() => onRemoveGroup(courseIndex, group.id)}
        className="self-start md:self-center"
        aria-label="Eliminar configuración de campus"
      />
    </div>
  );
};