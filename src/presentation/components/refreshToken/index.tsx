import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import { DecodedToken } from "@/shared/interfaces/general/decodedToken";
import { useSession } from "next-auth/react";
import { useCallback, useEffect } from "react";

// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { Session } from "next-auth";
import { useInterval } from "@mantine/hooks";

export const RefreshTokenHandler = () => {
  const { data: session, update } = useSession();
  const { refreshToken } = useAuthDependencies();

  const CHECK_INTERVAL = 1000 * 60 * 1;

  const refresh = useCallback(async () => {
    const token = await refreshToken.invoke();
    update({
      token: token as string,
    });
  }, [refreshToken, update]);

  const checkTokenExpiration = useCallback(
    async (session: Session | null) => {
      if (!session) return;

      const decodedToken: DecodedToken = jwt_decode(session?.user.token);

      if (decodedToken && decodedToken.exp) {
        const expirationDate = new Date(
          decodedToken.exp * 1000 - CHECK_INTERVAL
        );
        const currentDate = new Date();

        if (currentDate > expirationDate) {
          await refresh();
        }
      }
    },
    [CHECK_INTERVAL, refresh]
  );

  const checkToken = useCallback(
    async () => checkTokenExpiration(session),
    [checkTokenExpiration, session]
  );

  const interval = useInterval(checkToken, CHECK_INTERVAL);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, [interval]);

  return null;
};
