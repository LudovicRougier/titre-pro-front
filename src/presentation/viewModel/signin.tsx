import { Path } from "@/shared/enums/path";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { HTTP_STATUS } from "@/shared/enums/httpStatus.enum";

export const useViewModel = () => {
  const router = useRouter();

  const [hasSubmited, setHasSubmited] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const handleClickCreateAccount = () => router.push(Path.REGISTER);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    const options = {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: Path.INDEX,
    };

    setHasSubmited(true);

    return signIn("credentials", options).then((res) => {
      if (res?.status === HTTP_STATUS.SUCCESS) return router.push(Path.INDEX);
      if (res?.status === HTTP_STATUS.UNAUTHORIZED) {
        setHasSubmited(false);
        setError("Invalid credentials");
      }
    });
  });

  useEffect(() => {
    if (form.isTouched()) setError(null);
    // We need to disable this rule because we don't want form to be listened, only form.isTouched
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.isTouched]);

  return {
    form,
    handleSubmit,
    handleClickCreateAccount,
    hasSubmited,
    error,
  };
};
