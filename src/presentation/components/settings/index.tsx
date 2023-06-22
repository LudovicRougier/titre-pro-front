/* eslint-disable security/detect-object-injection */
import { UserModel } from "@/domain/model/User";
import { Account } from "@/presentation/components/settings/account";
import { Profile } from "@/presentation/components/settings/profile";
import { Container } from "@mantine/core";

interface SettingsProps {
  activeTab: string;
  accountDetails: UserModel;
}

export const Settings: React.FC<SettingsProps> = ({
  activeTab,
  accountDetails,
}) => {
  const componentMap: Record<string, JSX.Element> = {
    profile: <Profile accountDetails={accountDetails} />,
    accountSettings: <Account accountDetails={accountDetails} />,
  };

  const validTabs = Object.keys(componentMap);
  if (!validTabs.includes(activeTab)) return null;

  return (
    <Container mt="3.5rem" ml="4rem" w="100vw" fluid>
      {componentMap[activeTab]}
    </Container>
  );
};
