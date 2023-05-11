import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalContext from "@/shared/contexts/globalContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContext>
      <Head>
        <title>Emotion Pictures</title>
        <meta charSet="UTF-8" key="charset" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="http-equiv" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
        <meta name="rating" content="general" key="rating" />
      </Head>
      <Component {...pageProps} />
    </GlobalContext>
  );
};

export default MyApp;
