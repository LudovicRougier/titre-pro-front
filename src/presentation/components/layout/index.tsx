import React from "react";
import { AppShell, Container } from "@mantine/core";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import { motion } from "framer-motion";

import s from "./style.module.css";

const Layout: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <AppShell navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm">
      <Container fluid className={s.bg}>
        <motion.div
          className={s.layoutContainerMotion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </Container>
    </AppShell>
  );
};

export default Layout;
