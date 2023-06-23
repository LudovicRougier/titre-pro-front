import "reflect-metadata";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import { RefreshTokenHandler } from "@/presentation/components/refreshToken";

import LayoutMaster from "@/presentation/components/layoutMaster";
import GlobalContext from "@/shared/contexts/globalContext";

import "@/styles/reset.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutMaster>{page}</LayoutMaster>);

  return (
    <GlobalContext>
      <SessionProvider session={session}>
        <RefreshTokenHandler />
        <Head>
          <title>Emotion Pictures</title>
          <meta charSet="UTF-8" key="charset" />
          <meta
            httpEquiv="X-UA-Compatible"
            content="IE=edge"
            key="http-equiv"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            key="viewport"
          />
          <meta name="rating" content="general" key="rating" />
        </Head>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "dark",
            components: {
              Input: {
                styles: () => ({
                  input: {
                    "&:hover": {
                      borderColor: "#dbdbdb",
                    },
                    "&:focus": {
                      borderColor: "#dbdbdb",
                    },
                  },
                }),
              },
            },
          }}
        >
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </SessionProvider>
    </GlobalContext>
  );
};

export default MyApp;
