import { Path } from "@/shared/enums/path";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEventHandler, useRef } from "react";

export const useViewModel = () => {
  const userInfo = useRef({ email: "", password: "" });
  const router = useRouter();

  const handleClickCreateAccount = () => {
    router.push(Path.REGISTER);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    signIn("credentials", {
      email: userInfo.current.email,
      password: userInfo.current.password,
      redirect: true,
      callbackUrl: Path.INDEX,
    });
  };

  const handleUserInfoChange = (key: string, value: string) => {
    userInfo.current = { ...userInfo.current, [key]: value };
  };

  return {
    handleUserInfoChange,
    handleSubmit,
    userInfo: userInfo.current,
    handleClickCreateAccount,
  };
};
