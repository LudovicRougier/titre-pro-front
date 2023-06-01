import React from "react";
import { AppShell, Container } from "@mantine/core";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import Header from "@/presentation/components/header";

const LayoutMaster: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<Header />}
    >
      <Container fluid style={{ height: "100vh", width: "100vw", padding: 0 }}>
        {children}
      </Container>
    </AppShell>
  );
};

export default LayoutMaster;
