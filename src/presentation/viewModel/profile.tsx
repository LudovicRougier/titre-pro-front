import { UserInfo } from "@/data/datasource/interfaces/AccountDataSource";
import { useAccountDependencies } from "@/shared/contexts/dependencies/account";
import { useForm } from "@mantine/form";

export const useViewModel = (userInfo: UserInfo) => {
  const { updateAccountDetailsUseCase } = useAccountDependencies();

  const form = useForm({
    initialValues: {
      name: userInfo.name,
      age: userInfo.age,
      country: userInfo.country,
      description: userInfo.description,
      favoriteGenres: userInfo.favoriteGenres,
      excludedGenres: userInfo.excludedGenres,
    },

    validate: {
      name: (value) => (value.trim().length < 3 ? "Name is too short" : null),
      age: (value) => (parseInt(value, 10) <= 0 ? "Age is too short" : null),
    },
  });

  const handleSubmit = form.onSubmit((values) =>
    updateAccountDetailsUseCase.invoke(values)
  );

  return { form, handleSubmit };
};
