import { Path } from "@/shared/enums/path";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { useState } from "react";


export const useViewModel = () => {
  const router = useRouter();

  const handleClickCreateAccount = () => {
    router.push(Path.REGISTER);
  };

  const [hasSubmited, setHasSubmited] = useState(false);

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
    setHasSubmited(true);
    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: Path.INDEX,
    });
  });

  return {
    form,
    handleSubmit,
    handleClickCreateAccount,
    hasSubmited,
  };
};
