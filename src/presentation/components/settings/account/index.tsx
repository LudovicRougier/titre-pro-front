import { UserModel } from "@/domain/model/User";
import { useViewModel } from "@/presentation/viewModel/accountSettings";
import { FR_LOCALE } from "@/shared/enums/fr.locale.enum";
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
        <Text size="lg">{FR_LOCALE.EMAIL}</Text>
        <Group position="apart">
          <TextInput
            disabled={!isOnEditMail}
            placeholder={FR_LOCALE.YOUR_EMAIL}
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

      <Text size="lg">{FR_LOCALE.PASSWORD}</Text>

      <form onSubmit={handleSubmitUpdatePassword}>
        <Group position="apart" grow>
          <PasswordInput
            label={FR_LOCALE.NEW_PASSWORD}
            variant="filled"
            size="md"
            radius="md"
            mt="md"
            {...formPassword.getInputProps("newPassword")}
          />

          <PasswordInput
            label={FR_LOCALE.CURRENT_PASSWORD}
            variant="filled"
            size="md"
            radius="md"
            mt="md"
            {...formPassword.getInputProps("currentPassword")}
          />
        </Group>

        <Space h="xl" />

        <Text color="dimmed" size="sm">
          {FR_LOCALE.CANT_REMEMBER_PASSWORD}{" "}
          <Anchor size="sm" component="button">
            {FR_LOCALE.RESET_PASSWORD}
          </Anchor>
        </Text>

        <Button type="submit" variant="light" radius="md" mt="md">
          {FR_LOCALE.SAVE_PASSWORD}
        </Button>
      </form>

      <Divider size="sm" mt={36} />
      <Space h="xl" />

      <Text size="lg">{FR_LOCALE.DELETE_ACCOUNT}</Text>
      <Text mt="md">
        {FR_LOCALE.WOULD_YOU_LIKE_TO_DELETE_YOUR_ACCOUNT}{" "}
        {FR_LOCALE.THIS_ACCOUNT_HAS} <strong>{promptsCount}</strong>{" "}
        {FR_LOCALE.MOODS_ASSOCIATED} <br />
        {FR_LOCALE.WARNING_MOOD_DELETE}
      </Text>
      <Text size="sm" mt="md">
        <Anchor
          size="sm"
          component="button"
          color="red"
          onClick={deleteModal.handleShow}
        >
          {FR_LOCALE.I_WANT_TO_DELETE_MY_ACCOUNT}
        </Anchor>
      </Text>

      <Modal
        opened={deleteModal.show}
        onClose={deleteModal.handleClose}
        title={FR_LOCALE.CONFIRM_DELETE}
      >
        <Text>{FR_LOCALE.ARE_YOU_SURE_YOU_WANT_TO_DELETE_YOUR_ACCOUNT}</Text>
        <Text mt="md">{FR_LOCALE.DELETE_CONFIRMATION_DESCRIPTION}</Text>
        <Text mt="md">{FR_LOCALE.ASK_ADMIN_FOR_INFORMATION}</Text>

        <PasswordInput
          label={FR_LOCALE.CURRENT_PASSWORD}
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
