/* eslint-disable security/detect-object-injection */
import { UserInfo } from "@/data/datasource/interfaces/AccountDataSource";
import { Account } from "@/presentation/components/settings/account";
import { Profile } from "@/presentation/components/settings/profile";
import { Container } from "@mantine/core";
import { Session } from "next-auth";

interface SettingsProps {
  activeTab: string;
  session: Session | null;
  accountDetails: UserInfo;
}

export const Settings: React.FC<SettingsProps> = ({
  activeTab,
  session,
  accountDetails,
}) => {
  const componentMap: Record<string, JSX.Element> = {
    profile: <Profile accountDetails={accountDetails} />,
    accountSettings: <Account session={session} />,
  };

  const validTabs = Object.keys(componentMap);
  if (!validTabs.includes(activeTab)) return null;

  return (
    <Container mt="3.5rem" ml="4rem" w="100vw" fluid>
      {componentMap[activeTab]}
    </Container>
  );
};
