import { useState } from "react";
import {Select as SelectUI, SelectItem, Selection, SelectProps} from "@nextui-org/react";

interface Option {
  label: string
  value: string
}

interface Props extends Omit<SelectProps, 'children'> {
  options: Option[]
}

export function Select(props: Props) {
  const [value, setValue] = useState<Selection>(new Set([]));

  return (
    <SelectUI
    defaultSelectedKeys={"S"}
    selectedKeys={value}
    onSelectionChange={setValue}
    onChange={props.onChange}
    {...props}
    >
      {props.options.map((period) => (
        <SelectItem key={period.value} value={period.value}>
          {period.label}
        </SelectItem>
      ))}
    </SelectUI>
  );
}
