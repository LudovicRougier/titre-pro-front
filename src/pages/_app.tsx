import "reflect-metadata";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";

import GlobalContext from "@/shared/contexts/globalContext";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <GlobalContext>
      <SessionProvider session={session}>
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
            /** Put your mantine theme override here */
            colorScheme: "dark",
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </SessionProvider>
    </GlobalContext>
  );
};

export default MyApp;
