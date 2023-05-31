import { GetServerSideProps, NextPage } from "next";
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

const SignIn: NextPage = () => {
  const { handleSubmit, handleUserInfoChange } = useViewModel();
  return (
    <Container size={420} my={40}>
      <Center>
        <form onSubmit={handleSubmit}>
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Welcome back!
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor size="sm" component="button">
              Create account
            </Anchor>
          </Text>

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
        destination: Path.HOME,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default SignIn;
