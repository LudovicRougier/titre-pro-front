/* eslint-disable no-use-before-define */
import { GetServerSideProps } from "next";
import Image from "next/image";
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
  Loader,
  Alert,
} from "@mantine/core";
import { FR_LOCALE } from "@/shared/enums/fr.locale.enum";
import { getSession } from "next-auth/react";
import { Path } from "@/shared/enums/path";
import { countries } from "@/data/static/countries";
import Layout from "@/presentation/components/layout";
import { useViewModel } from "@/presentation/viewModel/register";
import { useShow } from "@/shared/hooks/useShow";
import { TERMS_OF_SERVICE } from "@/data/static/termsOfService";
import { IconX, IconCheck, IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";
import s from "./style.module.css";

const Register = () => {
  const {
    form,
    handleSubmit,
    handleClickSignIn,
    hasSubmited,
    errors,
    handleDismissError,
  } = useViewModel();

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
      <Center>
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
            {FR_LOCALE.REGISTER}
          </Title>

          <Paper withBorder shadow="md" p="xl" mt={30} radius="md">
            <TextInput
              label={FR_LOCALE.NAME}
              placeholder="David"
              mt="md"
              withAsterisk
              {...form.getInputProps("name")}
            />
            <TextInput
              label={FR_LOCALE.EMAIL}
              placeholder="you@emotion.dev"
              mt="md"
              withAsterisk
              {...form.getInputProps("email")}
            />
            <Group position="apart" grow>
              <Select
                label={FR_LOCALE.COUNTRY}
                placeholder={FR_LOCALE.PICK_ONE}
                data={countries}
                mt="md"
                withAsterisk
                searchable
                {...form.getInputProps("country")}
              />
              <TextInput
                label={FR_LOCALE.AGE}
                placeholder={FR_LOCALE.YOUR_AGE}
                mt="md"
                withAsterisk
                {...form.getInputProps("age")}
              />
            </Group>

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
                    label={FR_LOCALE.PASSWORD}
                    placeholder={FR_LOCALE.YOUR_PASSWORD}
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
              label={FR_LOCALE.CONFIRM_PASSWORD}
              placeholder={FR_LOCALE.YOUR_PASSWORD}
              mt="md"
              withAsterisk
              {...form.getInputProps("confirmPassword")}
            />

            <Group position="apart" mt="lg">
              <Checkbox
                label={FR_LOCALE.AUTOMATICALLY_SIGN_IN}
                {...form.getInputProps("autoSignIn")}
              />
            </Group>

            <Group mt="lg">
              <Checkbox
                label={
                  <Group className={s.termsWrapper}>
                    <Text size="sm" color="dimmed">
                      {FR_LOCALE.I_AGREE_WITH_THE}{" "}
                    </Text>
                    <Anchor
                      component="button"
                      size="sm"
                      onClick={handleShowModal}
                    >
                      {FR_LOCALE.TERMS_AND_CONDITIONS}
                    </Anchor>
                  </Group>
                }
                {...form.getInputProps("termsOfService")}
              />
            </Group>

            {errors &&
              errors.map((error: string, index: number) => (
                <Alert
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  icon={<IconAlertCircle size="1rem" />}
                  title="Error!"
                  color="red"
                  mb="md"
                  mt="md"
                  withCloseButton
                  onClose={() => handleDismissError(index)}
                >
                  {error}
                </Alert>
              ))}

            {hasSubmited ? (
              <Center mt="xl">
                <Loader size="sm" variant="bars" />
              </Center>
            ) : (
              <Button fullWidth mt="xl" type="submit">
                {form.values.autoSignIn
                  ? FR_LOCALE.REGISTER_AND_SIGN_IN
                  : FR_LOCALE.REGISTER}
              </Button>
            )}
          </Paper>
          <Text color="dimmed" size="sm" align="center" mt={24}>
            {FR_LOCALE.ALREADY_HAVE_AN_ACCOUNT}
            <Anchor size="sm" component="button" onClick={handleClickSignIn}>
              {FR_LOCALE.SIGN_IN}
            </Anchor>
          </Text>
        </form>

        <Modal
          opened={showModal}
          onClose={handleCloseModal}
          size="80%"
          title={FR_LOCALE.TERMS_AND_CONDITIONS}
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
