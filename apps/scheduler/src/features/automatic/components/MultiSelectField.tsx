import React from 'react';
import { Select, SelectItem, Chip } from '@easy-tec/ui';

interface MultiSelectFieldProps {
  id?: string;
  placeholder: string;
  selectedKeys: string[];
  options: Array<{ key: string; label: string; value?: string }>;
  onSelectionChange: (selectedKeys: string[]) => void;
  isRequired?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
  id,
  placeholder,
  selectedKeys,
  options,
  onSelectionChange,
  isRequired = false,
  className = "",
  size = "sm"
}) => {
  const handleSelectionChange = (keys: any) => {
    const keysArray = Array.from(keys) as string[];
    onSelectionChange(keysArray);
  };

  return (
    <div className={className}>
      <Select
        id={id}
        placeholder={placeholder}
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
        isRequired={isRequired}
        size={size}
        selectionMode="multiple"
        className="w-full"
        renderValue={(items) => (
          <div className="flex flex-wrap gap-1">
            {items.map((item) => (
              <Chip key={item.key} size="sm" variant="flat">
                {item.textValue}
              </Chip>
            ))}
          </div>
        )}
      >
        {options.map((option) => (
          <SelectItem key={option.key}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};