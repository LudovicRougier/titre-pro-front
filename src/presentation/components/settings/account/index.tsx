import {
  Anchor,
  Button,
  Divider,
  Group,
  PasswordInput,
  Space,
  Text,
} from "@mantine/core";
import { Session } from "next-auth";

interface AccountProps {
  session: Session | null;
}

export const Account: React.FC<AccountProps> = ({ session }) => {
  return (
    <>
      <Text weight={600} size="xl">
        Account Settings
      </Text>

      <Space h="xl" />
      <Space h="xl" />

      <Text size="lg">Email address</Text>
      <Space h="md" />
      <Group position="apart">
        <Text>
          Your email address is <strong>{session?.user.email}</strong>
        </Text>
        <Anchor size="sm" component="button">
          Change
        </Anchor>
      </Group>

      <Divider size="sm" mt={36} />
      <Space h="xl" />

      <Text size="lg">Password</Text>

      <Group position="apart" grow>
        <PasswordInput
          label="New password"
          variant="filled"
          size="md"
          radius="md"
          mt="md"
        />

        <PasswordInput
          label="Current password"
          variant="filled"
          size="md"
          radius="md"
          mt="md"
        />
      </Group>

      <Space h="xl" />

      <Text color="dimmed" size="sm">
        Cant remember your password?{" "}
        <Anchor size="sm" component="button">
          Reset your password
        </Anchor>
      </Text>

      <Button variant="light" radius="md" mt="md">
        Save password
      </Button>

      <Divider size="sm" mt={36} />
      <Space h="xl" />

      <Text size="lg">Delete account</Text>
      <Text mt="md">
        Would you like to delete your account? This account has{" "}
        <strong>1234</strong> moods associated with it. <br />
        Deleting your account will delete all of your moods and cannot be
        undone.
      </Text>
      <Text size="sm" mt="md">
        <Anchor size="sm" component="button" color="red">
          I want to delete my account
        </Anchor>
      </Text>
    </>
  );
};
