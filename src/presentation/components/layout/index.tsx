import React from "react";
import { AppShell, Center, Footer, useMantineTheme } from "@mantine/core";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import Header from "@/presentation/components/header";

const Layout: React.FC<ChildrenInterface> = ({ children }) => {
  const theme = useMantineTheme();
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<Header />}
      footer={
        <Footer height={60} p="md">
          <Center>Application footer</Center>
        </Footer>
      }
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
