/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import { useSession } from "next-auth/react";
import { useCallback, useEffect } from "react";

// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { Session } from "next-auth";
import { useInterval } from "@mantine/hooks";

interface DecodedToken {
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  prv: string;
  sub: string;
}

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

      console.log("[RefreshTokenHandler] decodedToken: ", decodedToken);

      if (decodedToken && decodedToken.exp) {
        const expirationDate = new Date(
          decodedToken.exp * 1000 - CHECK_INTERVAL
        );
        const currentDate = new Date();

        console.log("[RefreshTokenHandler] expirationDate: ", expirationDate);
        console.log(
          "[RefreshTokenHandler] currentDate: ",
          currentDate.toLocaleString()
        );

        if (currentDate > expirationDate) {
          console.log(
            "[RefreshTokenHandler] La date d'expiration est passée. On refresh le token !!!"
          );
          await refresh();
        } else {
          console.log("[RefreshTokenHandler] La date d'expiration est valide.");
        }
      } else {
        console.log(
          '[RefreshTokenHandler] Impossible de décoder le token ou la propriété "exp" est absente.'
        );
      }
    },
    [CHECK_INTERVAL, refresh]
  );

  const checkToken = useCallback(
    async () => checkTokenExpiration(session),
    [checkTokenExpiration, session]
  );

  const interval = useInterval(checkToken, CHECK_INTERVAL);
  console.log("[RefreshTokenHandler] session: ", session);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, [interval]);

  return null;
};
