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
  Group,
  Checkbox,
  Modal,
} from "@mantine/core";
import { getSession } from "next-auth/react";
import { Path } from "@/shared/enums/path";
import Layout from "@/presentation/components/layout";
import { useViewModel } from "@/presentation/viewModel/register";
import { useShow } from "@/shared/hooks/useShow";
import { TERMS_OF_SERVICE } from "@/data/static/termsOfService";

const Register = () => {
  const { form, handleSubmit, handleClickSignIn } = useViewModel();

  const {
    show: showModal,
    handleShow: handleShowModal,
    handleClose: handleCloseModal,
  } = useShow();

  return (
    <Container size={420} my={40}>
      <Center
        style={{
          height: "100vh",
          marginTop: "-10vh",
        }}
      >
        <form onSubmit={handleSubmit}>
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
              withAsterisk
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="you@emotion.dev"
              mt="md"
              withAsterisk
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              withAsterisk
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm password"
              placeholder="Your password"
              mt="md"
              withAsterisk
              {...form.getInputProps("confirmPassword")}
            />

            <Group position="apart" mt="lg">
              <Checkbox
                label="I agree to the terms and conditions"
                {...form.getInputProps("termsOfService")}
              />
              <Anchor component="button" size="sm" onClick={handleShowModal}>
                Terms and conditions
              </Anchor>
            </Group>
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

        <Modal
          opened={showModal}
          onClose={handleCloseModal}
          size="80%"
          title="Terms and conditions"
          transitionProps={{ transition: "fade", duration: 200 }}
        >
          {TERMS_OF_SERVICE.split("<br>").map((line) => (
            <p key={`line_${line.length}`}>{line}</p>
          ))}
        </Modal>
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
