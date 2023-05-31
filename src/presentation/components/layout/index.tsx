import React from "react";
import { AppShell, Container } from "@mantine/core";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";

const Layout: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <AppShell navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm">
      <Container fluid className="bg">
        {children}
      </Container>
    </AppShell>
  );
};

export default Layout;
