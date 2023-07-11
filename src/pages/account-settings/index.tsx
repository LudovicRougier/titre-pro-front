import React, { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import {
  Container,
  Grid,
  Text,
  Divider,
  Space,
  NavLink,
  Center,
  Loader,
} from "@mantine/core";
import { Settings } from "@/presentation/components/settings";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useViewModel } from "@/presentation/viewModel/settings";
import { FR_LOCALE } from "@/shared/enums/fr.locale.enum";

const ACCOUNT_SETTINGS = "accountSettings";
const PUBLIC_PROFILE = "profile";

interface AccountSettingsProps {
  user: Session | null;
}

const AccountSettings: NextPage<AccountSettingsProps> = ({ user }) => {
  const [tab, setTab] = useState(ACCOUNT_SETTINGS);
  const { accountDetails, isAccountDetailsLoading } = useViewModel();

  if (!user) return null;

  if (isAccountDetailsLoading || !accountDetails)
    return (
      <Center mt="xl">
        <Loader size="sm" variant="bars" />
      </Center>
    );

  return (
    <Container mt="xl" w="80vw">
      <Grid>
        <Grid.Col xs={2} sm={4} md={4} lg={4}>
          <Text weight={600} size="xl">
            {FR_LOCALE.SETTINGS}
          </Text>
          <Space h="xl" />
          <NavLink
            label={FR_LOCALE.ACCOUNT_SETTINGS}
            active={tab === ACCOUNT_SETTINGS}
            onClick={() => setTab(ACCOUNT_SETTINGS)}
          />
          <NavLink
            label={FR_LOCALE.PUBLIC_PROFILE}
            active={tab === PUBLIC_PROFILE}
            onClick={() => setTab(PUBLIC_PROFILE)}
          />
        </Grid.Col>
        <Divider orientation="vertical" size="sm" />
        <Grid.Col span={7}>
          <Settings activeTab={tab} accountDetails={accountDetails} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      user: session,
    },
  };
};

export default AccountSettings;
