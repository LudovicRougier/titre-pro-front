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
} from "@mantine/core";
import { useViewModel } from "@/presentation/viewModel/signin";
import { getSession } from "next-auth/react";
import { Path } from "@/shared/enums/path";
import Layout from "@/presentation/components/layout";
import Link from "next/link";

const SignIn = () => {
  const { handleSubmit, handleUserInfoChange, handleClickCreateAccount } =
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
            Login
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="Email"
              placeholder="you@mantine.dev"
              required
              onChange={({ target }) =>
                handleUserInfoChange("email", target.value)
              }
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              onChange={({ target }) =>
                handleUserInfoChange("password", target.value)
              }
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" type="submit">
              Sign in
            </Button>
          </Paper>
          <Text color="dimmed" size="sm" align="center" mt={24}>
            Do not have an account yet?{" "}
            <Anchor
              size="sm"
              component="button"
              onClick={handleClickCreateAccount}
            >
              Create account
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
