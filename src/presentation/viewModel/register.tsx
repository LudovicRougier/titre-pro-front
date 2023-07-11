import { useRouter } from "next/router";
import { Path } from "@/shared/enums/path";
import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import { useForm } from "@mantine/form";
import { signIn } from "next-auth/react";
import { HTTP_STATUS } from "@/shared/enums/httpStatus.enum";
import { useEffect, useState } from "react";

export const useViewModel = () => {
  const router = useRouter();
  const { registerUseCase } = useAuthDependencies();

  const [hasSubmited, setHasSubmited] = useState<boolean>(false);
  const [errors, setErrors] = useState<null | string[]>(null);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      country: "",
      age: "",
      password: "",
      confirmPassword: "",
      termsOfService: false,
      autoSignIn: false,
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
    setHasSubmited(true);
    const res = await registerUseCase.invoke(values);
    if (!res) setErrors(["Something went wrong"]);

    if (res?.success && values.autoSignIn) {
      const options = {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: Path.INDEX,
      };

      return signIn("credentials", options).then((res) => {
        if (res?.status === HTTP_STATUS.SUCCESS) return router.push(Path.INDEX);
      });
    }

    if (res?.success && !values.autoSignIn) return router.push(Path.SIGNIN);

    if (res?.errors) {
      setErrors(Object.values(res?.errors));
      setHasSubmited(false);
    }
  });

  const handleClickSignIn = () => router.push(Path.SIGNIN);

  const handleDismissError = (index: number) => {
    if (!errors) return;
    const newErrors = [...errors];
    // eslint-disable-next-line security/detect-object-injection
    const updatedErrors = newErrors.filter((error) => error !== errors[index]);
    setErrors(updatedErrors);
  };

  useEffect(() => {
    if (form.isTouched() && errors) setErrors(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.isTouched]);

  return {
    form,
    handleSubmit,
    handleClickSignIn,
    hasSubmited,
    errors,
    handleDismissError,
  };
};
