import { UserModel } from "@/domain/model/User";
import { useAccountDependencies } from "@/shared/contexts/dependencies/account";
import { useShow } from "@/shared/hooks/useShow";
import { useForm } from "@mantine/form";

export const useViewModel = (userInfo: UserModel) => {
  const { updateAccountDetailsUseCase } = useAccountDependencies();
  const { show: isOnEditMail, toggle: toggleEditMail } = useShow(false);

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

  return {
    formMail,
    formPassword,
    handleSubmitUpdateMail,
    handleSubmitUpdatePassword,
    isOnEditMail,
    toggleEditMail,
  };
};
