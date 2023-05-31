import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import {
  Avatar,
  Button,
  Container,
  Flex,
  Grid,
  NavLink,
  Text,
} from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Menu from "@/presentation/components/menu";
import { Logout, Setting2 } from "iconsax-react";
import { useRouter } from "next/router";
import { Path } from "@/shared/enums/path";

const Header: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { logoutUseCase } = useAuthDependencies();

  const handleLogin = () => signIn();
  const handleClickHome = () => router.push(Path.INDEX);
  const handleClickHistory = () => router.push(Path.MOOD_HISTORY);
  const handleLogout = async () => {
    await logoutUseCase.invoke();
    signOut();
  };

  const menuItems = [
    {
      id: 1,
      label: "Settings",
      icon: <Setting2 size={14} />,
      onClick: () => router.push(Path.ACCOUNT_SETTINGS),
    },
    {
      id: 2,
      label: "Logout",
      icon: <Logout size={14} />,
      onClick: handleLogout,
    },
  ];

  return (
    <Container fluid>
      <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Text td="bold">LOGO</Text>
        <Container>
          <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
            <Grid.Col span={6}>
              <NavLink
                active={router.pathname === Path.INDEX}
                label="Home"
                onClick={handleClickHome}
                variant="subtle"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NavLink
                active={router.pathname === Path.MOOD_HISTORY}
                label="History"
                onClick={handleClickHistory}
                variant="subtle"
              />
            </Grid.Col>
          </Grid>
        </Container>
        {status !== "loading" &&
          (status === "authenticated" ? (
            <Menu
              label={`Signed in as ${session?.user.email}`}
              items={menuItems}
              position="bottom-end"
              target={
                <Avatar
                  variant="filled"
                  radius="xl"
                  style={{ cursor: "pointer" }}
                />
              }
            />
          ) : (
            <Button color="gray" radius="md" onClick={handleLogin}>
              Sign in
            </Button>
          ))}
      </Flex>
    </Container>
  );
};

export default Header;
