import React from "react";
import { AppShell } from "@mantine/core";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import { motion } from "framer-motion";
import Header from "@/presentation/components/header";

import s from "./style.module.css";

const LayoutMaster: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <AppShell
      className={s.layoutMaster}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<Header />}
    >
      <div className={s.layoutMasterContainer}>
        <motion.div
          className={s.layoutMasterContainerMotion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </div>
    </AppShell>
  );
};

export default LayoutMaster;
