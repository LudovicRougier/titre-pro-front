import { Path } from "@/shared/enums/path";
import { signIn } from "next-auth/react";
import { FormEventHandler, useRef } from "react";

export const useViewModel = () => {
  const userInfo = useRef({ email: "", password: "" });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    signIn("credentials", {
      email: userInfo.current.email,
      password: userInfo.current.password,
      redirect: true,
      callbackUrl: Path.HOME,
    });
  };

  const handleUserInfoChange = (key: string, value: string) => {
    userInfo.current = { ...userInfo.current, [key]: value };
  };

  return { handleUserInfoChange, handleSubmit, userInfo: userInfo.current };
};
