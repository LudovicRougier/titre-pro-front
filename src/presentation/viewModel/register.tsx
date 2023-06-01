import { Path } from "@/shared/enums/path";
import { useRouter } from "next/router";

export const useViewModel = () => {
  const router = useRouter();

  const handleClickSignIn = () => {
    router.push(Path.SIGNIN);
  };

  return { handleClickSignIn };
};
