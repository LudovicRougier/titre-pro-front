import { useRouter } from "next/router";
import { Path } from "@/shared/enums/path";
import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import { useForm } from "@mantine/form";

export const useViewModel = () => {
  const router = useRouter();
  const { registerUseCase } = useAuthDependencies();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      country: "",
      age: "",
      password: "",
      confirmPassword: "",
      termsOfService: false,
    },

    validate: {
      name: (value: string) =>
        value.trim().length < 3 ? "Name is too short" : null,
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      country: (value: string) => (!value ? "You must select a country" : null),
      age: (value: string) => (!value ? "How old are your?" : null),
      password: (value) =>
        value.trim().length < 8 ? "Password is too short" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
      termsOfService: (value) =>
        value !== true ? "You must accept the terms of service" : null,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    const res = await registerUseCase.invoke(values);
    if (res?.success) router.push(Path.SIGNIN);
  });

  const handleClickSignIn = () => router.push(Path.SIGNIN);

  return { form, handleSubmit, handleClickSignIn };
};
