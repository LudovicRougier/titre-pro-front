/* eslint-disable no-use-before-define */
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
  Box,
  Popover,
  Progress,
  Select,
} from "@mantine/core";
import { getSession } from "next-auth/react";
import { Path } from "@/shared/enums/path";
import { countries } from "@/data/static/countries";
import Layout from "@/presentation/components/layout";
import { useViewModel } from "@/presentation/viewModel/register";
import { useShow } from "@/shared/hooks/useShow";
import { TERMS_OF_SERVICE } from "@/data/static/termsOfService";
import { IconX, IconCheck } from "@tabler/icons-react";
import { useState } from "react";

const Register = () => {
  const { form, handleSubmit, handleClickSignIn } = useViewModel();

  const [popoverOpened, setPopoverOpened] = useState(false);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      label={requirement.label}
      meets={requirement.re.test(form.values.password)}
    />
  ));

  const strength = getStrength(form.values.password);
  // eslint-disable-next-line no-nested-ternary
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

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
            <Select
              label="Country"
              placeholder="Pick one"
              data={countries}
              mt="md"
              withAsterisk
              {...form.getInputProps("country")}
            />
            <TextInput
              label="Age"
              placeholder="Your age"
              mt="md"
              withAsterisk
              {...form.getInputProps("age")}
            />

            <Popover
              opened={popoverOpened}
              position="bottom"
              width="target"
              transitionProps={{ transition: "pop" }}
            >
              <Popover.Target>
                <div
                  onFocusCapture={() => setPopoverOpened(true)}
                  onBlurCapture={() => setPopoverOpened(false)}
                >
                  <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    mt="md"
                    withAsterisk
                    {...form.getInputProps("password")}
                  />
                </div>
              </Popover.Target>
              <Popover.Dropdown>
                <Progress color={color} value={strength} size={5} mb="xs" />
                <PasswordRequirement
                  label="Includes at least 8 characters"
                  meets={form.values.password.length > 7}
                />
                {checks}
              </Popover.Dropdown>
            </Popover>

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

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />}{" "}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export default Register;
