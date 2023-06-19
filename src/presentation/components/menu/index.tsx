import { Menu as MantineMenu } from "@mantine/core";
import { FloatingPosition } from "@mantine/core/lib/Floating";

interface MenuProps {
  label: string;
  target: JSX.Element;
  position?: FloatingPosition | undefined;
  items: {
    id: number;
    label: string;
    icon: JSX.Element;
    onClick: () => unknown;
  }[];
}

const Menu: React.FC<MenuProps> = ({ label, target, position, items }) => {
  return (
    <MantineMenu position={position} shadow="md" width={200}>
      <MantineMenu.Target>{target}</MantineMenu.Target>
      <MantineMenu.Dropdown>
        <MantineMenu.Label>{label}</MantineMenu.Label>
        {items.map((item) => (
          <MantineMenu.Item
            key={item.id}
            icon={item.icon}
            onClick={item.onClick}
          >
            {item.label}
          </MantineMenu.Item>
        ))}
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
};

export default Menu;
