import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import { Avatar, Button, Container, Flex, Grid, Text } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Menu from "@/presentation/components/menu";

const Header: React.FC = () => {
  const { data: session } = useSession();
  const { logoutUseCase } = useAuthDependencies();

  const handleLogout = async () => {
    await logoutUseCase.invoke();
    signOut();
  };

  const handleLogin = () => signIn();

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
              <Text>Home</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text>History</Text>
            </Grid.Col>
          </Grid>
        </Container>
        {session ? (
          <Menu
            logout={handleLogout}
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
        )}
      </Flex>
    </Container>
  );
};

export default Header;
