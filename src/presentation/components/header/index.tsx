import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import Image from "next/image";
import Link from "next/link";
import {
  Avatar,
  Button,
  Center,
  Container,
  Grid,
  Header as HeaderMantine,
  Loader,
  Modal,
  Text,
} from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Menu from "@/presentation/components/menu";
import { Logout, Setting2 } from "iconsax-react";
import { useRouter } from "next/router";
import { useShow } from "@/shared/hooks/useShow";
import { Path } from "@/shared/enums/path";

import s from "./style.module.css";

const Header: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { logoutUseCase } = useAuthDependencies();
  const { show, handleShow, handleClose } = useShow();

  const handleLogin = () => signIn();
  const handleClickHome = () => router.push(Path.INDEX);
  const handleClickHistory = () => router.push(Path.MOOD_HISTORY);
  const handleLogout = async () => {
    handleShow();
    await logoutUseCase.invoke();
    signOut();
  };

  const IS_HOME = router.pathname === Path.INDEX;
  const IS_HISTORY = router.pathname === Path.MOOD_HISTORY;

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
    <>
      <HeaderMantine height={{ base: 50, md: 50 }} p="md" className={s.header}>
        <div className={s.headerWrapper}>
          <Link href={Path.INDEX}>
            <Image src="/logo.png" alt="" width={50} height={50} />
          </Link>
          <Container>
            <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
              <Grid.Col span={6}>
                <Text
                  onClick={handleClickHome}
                  variant="subtle"
                  color={IS_HOME ? "white" : "light gray"}
                  className={s.headerNavLink}
                >
                  Home
                </Text>
              </Grid.Col>
              <Grid.Col span={6}>
                {session && (
                  <Text
                    onClick={handleClickHistory}
                    variant="subtle"
                    color={IS_HISTORY ? "white" : "light gray"}
                    className={s.headerNavLink}
                  >
                    History
                  </Text>
                )}
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
        </div>
      </HeaderMantine>

      <Modal
        opened={show}
        onClose={handleClose}
        withCloseButton={false}
        closeOnClickOutside={false}
        closeOnEscape={false}
        title="Please wait"
        overlayProps={{
          opacity: 0.55,
          blur: 3,
        }}
      >
        Please wait while we log you out...
        <Center mt="xl">
          <Loader size="sm" variant="bars" />
        </Center>
      </Modal>
    </>
  );
};

export default Header;
