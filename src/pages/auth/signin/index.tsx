/* eslint-disable no-console */
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";

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
} from "@mantine/core";

const SignIn: NextPage = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const { data, status } = useSession();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const options = {
      email: userInfo.email,
      password: userInfo.password,
      redirect: true,
      callbackUrl: "/",
    };

    const res = await signIn("credentials", options);
    console.log(res);
  };
  return (
    <Container size={420} my={40}>
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
            value={userInfo.email}
            label="Email"
            placeholder="you@mantine.dev"
            required
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
          />
          <PasswordInput
            value={userInfo.password}
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
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
    </Container>
  );
};

export default SignIn;
