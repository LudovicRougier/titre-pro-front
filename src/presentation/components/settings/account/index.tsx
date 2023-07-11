import { UserModel } from "@/domain/model/User";
import { useViewModel } from "@/presentation/viewModel/accountSettings";
import {
  Anchor,
  Button,
  Divider,
  Group,
  Modal,
  PasswordInput,
  Space,
  Text,
  TextInput,
} from "@mantine/core";

interface AccountProps {
  accountDetails: UserModel;
}

export const Account: React.FC<AccountProps> = ({ accountDetails }) => {
  const {
    formMail,
    formPassword,
    formDeleteAccount,
    handleSubmitUpdateMail,
    handleSubmitUpdatePassword,
    handleSubmitDeleteAccount,
    isOnEditMail,
    toggleEditMail,
    deleteModal,
  } = useViewModel(accountDetails);

  // eslint-disable-next-line no-nested-ternary
  const promptsCount = accountDetails.prompts
    ? accountDetails.prompts.length > 0
      ? accountDetails.prompts.length
      : 0
    : 0;

  return (
    <>
      <Text weight={600} size="xl">
        Account Settings
      </Text>

      <Space h="xl" />
      <Space h="xl" />
      <form onSubmit={handleSubmitUpdateMail}>
        <Text size="lg">Email address</Text>
        <Group position="apart">
          <TextInput
            disabled={!isOnEditMail}
            placeholder="Your email"
            label=""
            variant="filled"
            mt="md"
            radius="md"
            {...formMail.getInputProps("email")}
          />
          {isOnEditMail ? (
            <Button type="submit" variant="light" radius="md" mt="md">
              Save
            </Button>
          ) : (
            <Button
              variant="light"
              color="gray"
              radius="md"
              mt="md"
              onClick={(event) => {
                event.preventDefault();
                toggleEditMail();
              }}
            >
              Edit
            </Button>
          )}
        </Group>
      </form>

      <Divider size="sm" mt={36} />
      <Space h="xl" />

      <Text size="lg">Password</Text>

      <form onSubmit={handleSubmitUpdatePassword}>
        <Group position="apart" grow>
          <PasswordInput
            label="New password"
            variant="filled"
            size="md"
            radius="md"
            mt="md"
            {...formPassword.getInputProps("newPassword")}
          />

          <PasswordInput
            label="Current password"
            variant="filled"
            size="md"
            radius="md"
            mt="md"
            {...formPassword.getInputProps("currentPassword")}
          />
        </Group>

        <Space h="xl" />

        <Text color="dimmed" size="sm">
          Cant remember your password?{" "}
          <Anchor size="sm" component="button">
            Reset your password
          </Anchor>
        </Text>

        <Button type="submit" variant="light" radius="md" mt="md">
          Save password
        </Button>
      </form>

      <Divider size="sm" mt={36} />
      <Space h="xl" />

      <Text size="lg">Delete account</Text>
      <Text mt="md">
        Would you like to delete your account? This account has{" "}
        <strong>{promptsCount}</strong> moods associated with it. <br />
        Deleting your account will delete all of your moods and cannot be
        undone.
      </Text>
      <Text size="sm" mt="md">
        <Anchor
          size="sm"
          component="button"
          color="red"
          onClick={deleteModal.handleShow}
        >
          I want to delete my account
        </Anchor>
      </Text>

      <Modal
        opened={deleteModal.show}
        onClose={deleteModal.handleClose}
        title="Confirm delete"
      >
        <Text>Are you sure you want to delete your account?</Text>
        <Text mt="md">
          This action cannot be undone. All of your moods will be deleted. You
          can still query the admin for your user data.
        </Text>

        <Text mt="md">
          Please ask contact@emotionpictures.com for more information.
        </Text>

        <PasswordInput
          label="Current Password"
          variant="filled"
          size="md"
          radius="md"
          mt="md"
          {...formDeleteAccount.getInputProps("currentPassword")}
        />

        <Group mt="xl" position="apart" grow>
          <Button
            variant="light"
            color="gray"
            mt="md"
            radius="md"
            onClick={(e) => {
              e.stopPropagation();
              deleteModal.handleClose();
            }}
            style={{ transition: "0.5s" }}
          >
            Cancel
          </Button>
          <Button
            variant="light"
            color="red"
            mt="md"
            radius="md"
            onClick={(e) => {
              e.stopPropagation();
              handleSubmitDeleteAccount();
            }}
            style={{ transition: "0.5s" }}
          >
            Delete
          </Button>
        </Group>
      </Modal>
    </>
  );
};
