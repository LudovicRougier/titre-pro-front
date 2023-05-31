import { Menu as MantineMenu } from "@mantine/core";
import { FloatingPosition } from "@mantine/core/lib/Floating";
import { Logout, Profile, Setting2 } from "iconsax-react";

interface MenuProps {
  target: JSX.Element;
  position?: FloatingPosition | undefined;
  logout: () => void;
}

const Menu: React.FC<MenuProps> = ({ target, position, logout }) => {
  return (
    <MantineMenu position={position} shadow="md" width={200}>
      <MantineMenu.Target>{target}</MantineMenu.Target>

      <MantineMenu.Dropdown>
        <MantineMenu.Label>Account</MantineMenu.Label>
        <MantineMenu.Item icon={<Profile size={14} />}>
          Profile
        </MantineMenu.Item>
        <MantineMenu.Item icon={<Setting2 size={14} />}>
          Settings
        </MantineMenu.Item>
        <MantineMenu.Item icon={<Logout size={14} />} onClick={logout}>
          Logout
        </MantineMenu.Item>
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
};

export default Menu;
