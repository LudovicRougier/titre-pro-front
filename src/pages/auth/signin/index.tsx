import { GetServerSideProps } from "next";
import Image from "next/image";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Center,
  Loader,
  Alert,
} from "@mantine/core";
import { useViewModel } from "@/presentation/viewModel/signin";
import { getSession } from "next-auth/react";
import { Path } from "@/shared/enums/path";
import Layout from "@/presentation/components/layout";
import Link from "next/link";
import { IconAlertCircle } from "@tabler/icons-react";
import { FR_LOCALE } from "@/shared/enums/fr.locale.enum";

const SignIn = () => {
  const { form, handleSubmit, handleClickCreateAccount, hasSubmited, error } =
    useViewModel();

  return (
    <Container size={420} my={40}>
      <Center
        style={{
          height: "100vh",
          marginTop: "-10vh",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Center mb="md">
            <Link href={Path.INDEX}>
              <Image src="/logo.png" alt="" width={75} height={75} />
            </Link>
          </Center>
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 600,
            })}
          >
            {FR_LOCALE.LOGIN}
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            {error && (
              <Alert
                icon={<IconAlertCircle size="1rem" />}
                title="Bummer!"
                color="red"
                mb="md"
              >
                {FR_LOCALE.ERROR}: {error}
              </Alert>
            )}
            <TextInput
              label={FR_LOCALE.EMAIL}
              placeholder="you@mantine.dev"
              required
              {...form.getInputProps("email")}
              data-test="auth-email"
            />
            <PasswordInput
              label={FR_LOCALE.PASSWORD}
              placeholder={FR_LOCALE.YOUR_PASSWORD}
              required
              mt="md"
              {...form.getInputProps("password")}
              data-test="auth-password"
            />
            <Group position="apart" mt="lg">
              <Checkbox label={FR_LOCALE.REMEMBER_ME} />
              <Anchor component="button" size="sm">
                {FR_LOCALE.FORGOT_PASSWORD}
              </Anchor>
            </Group>
            {hasSubmited ? (
              <Center mt="xl">
                <Loader size="sm" variant="bars" />
              </Center>
            ) : (
              <Button fullWidth mt="xl" type="submit">
                {FR_LOCALE.SIGN_IN}
              </Button>
            )}
          </Paper>
          <Text color="dimmed" size="sm" align="center" mt={24}>
            {FR_LOCALE.DONT_HAVE_AN_ACCOUNT}{" "}
            <Anchor
              size="sm"
              component="button"
              onClick={handleClickCreateAccount}
            >
              {FR_LOCALE.CREATE_ACCOUNT}
            </Anchor>
          </Text>
        </form>
      </Center>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: Path.INDEX,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

SignIn.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default SignIn;
