import { UserModel } from "@/domain/model/User";
import { useAccountDependencies } from "@/shared/contexts/dependencies/account";
import { useShow } from "@/shared/hooks/useShow";
import { useForm } from "@mantine/form";
import { signOut } from "next-auth/react";

export const useViewModel = (userInfo: UserModel) => {
  const { updateAccountDetailsUseCase, deleteAccountUseCase } =
    useAccountDependencies();
  const { show: isOnEditMail, toggle: toggleEditMail } = useShow(false);
  const deleteModal = useShow(false);

  const formMail = useForm({
    initialValues: {
      email: userInfo.email ?? "",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  });

  const formPassword = useForm({
    initialValues: {
      newPassword: "",
      currentPassword: "",
    },

    validate: {
      newPassword: (value) =>
        value.trim().length < 8 ? "Password is too short" : null,
    },
  });

  const formDeleteAccount = useForm({
    initialValues: {
      currentPassword: "",
    },
  });

  const handleSubmitUpdateMail = formMail.onSubmit(async (values) => {
    const updatedUserInfo = new UserModel({
      email: values.email,
    });
    updateAccountDetailsUseCase.invoke(updatedUserInfo);
    toggleEditMail();
  });

  const handleSubmitUpdatePassword = formPassword.onSubmit(async (values) => {
    const updatedUserInfo = new UserModel({
      currentPassword: values.currentPassword,
      newPassword: values.newPassword,
    });
    updateAccountDetailsUseCase.invoke(updatedUserInfo);
  });

  const handleSubmitDeleteAccount = formDeleteAccount.onSubmit(
    async (values) => {
      const { currentPassword } = values;
      const res = await deleteAccountUseCase.invoke(currentPassword);
      if (res?.success) signOut();
    }
  );

  return {
    formMail,
    formPassword,
    formDeleteAccount,
    handleSubmitUpdateMail,
    handleSubmitUpdatePassword,
    handleSubmitDeleteAccount,
    isOnEditMail,
    toggleEditMail,
    deleteModal,
  };
};
