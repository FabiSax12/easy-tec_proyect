import { Switch } from "@easy-tec/ui";

interface LayoutToggleProps {
  isRowLayout: boolean;
  onToggle: (value: boolean) => void;
}

export const LayoutToggle = ({ isRowLayout, onToggle }: LayoutToggleProps) => (
  <Switch
    isSelected={isRowLayout}
    color="default"
    onValueChange={onToggle}
    className="hidden xl:block"
  >
    {isRowLayout ? "Horizontal" : "Vertical"}
  </Switch>
);