import { GetServerSideProps } from "next";
import {
  Container,
  Center,
  Title,
  Anchor,
  Button,
  Paper,
  PasswordInput,
  TextInput,
  Text,
} from "@mantine/core";
import { getSession } from "next-auth/react";
import { Path } from "@/shared/enums/path";
import Layout from "@/presentation/components/layout";
import { useViewModel } from "@/presentation/viewModel/register";

const Register = () => {
  const { handleClickSignIn } = useViewModel();

  return (
    <Container size={420} my={40}>
      <Center
        style={{
          height: "100vh",
          marginTop: "-10vh",
        }}
      >
        <form
        // onSubmit={handleSubmit}
        >
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 600,
            })}
          >
            Register
          </Title>

          <Paper withBorder shadow="md" p="xl" mt={30} radius="md">
            <TextInput
              label="Name"
              placeholder="David"
              mt="md"
              required
              // onChange={({ target }) =>
              //   handleUserInfoChange("email", target.value)
              // }
            />
            <TextInput
              label="Email"
              placeholder="you@emotion.dev"
              required
              mt="md"
              // onChange={({ target }) =>
              //   handleUserInfoChange("email", target.value)
              // }
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              // onChange={({ target }) =>
              //   handleUserInfoChange("password", target.value)
              // }
            />
            <PasswordInput
              label="Confirm password"
              placeholder="Your password"
              required
              mt="md"
              // onChange={({ target }) =>
              //   handleUserInfoChange("password", target.value)
              // }
            />
            <Button fullWidth mt="xl" type="submit">
              Register
            </Button>
          </Paper>
          <Text color="dimmed" size="sm" align="center" mt={24}>
            Already have an account?{" "}
            <Anchor size="sm" component="button" onClick={handleClickSignIn}>
              Sign in
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

Register.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Register;
