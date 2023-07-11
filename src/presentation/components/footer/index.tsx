import { FR_LOCALE } from "@/shared/enums/fr.locale.enum";
import { Footer as FooterMantine, Center, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { Path } from "@/shared/enums/path";

import s from "./style.module.css";

const Footer = () => {
  const router = useRouter();
  const handleClickTeam = () => router.push(Path.TEAM);

  return (
    <FooterMantine height={25} className={s.footer}>
      <Center className={s.footerContent}>
        <Text fw={300} fz="sm" className={s.footerContentText}>
          {FR_LOCALE.MADE_WITH_LOVE_BY}
        </Text>
        <Text
          fw={800}
          fz="sm"
          onClick={handleClickTeam}
          className={s.footerContentLink}
        >
          O&apos;Clock Students
        </Text>
      </Center>
    </FooterMantine>
  );
};

export default Footer;
