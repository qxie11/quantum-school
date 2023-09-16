import Head from "next/head";
import { Provider } from "react-redux";
import NextNprogress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { store } from "@store/store";
import "antd/dist/antd";
import "@styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <NextNprogress
        options={{
          showSpinner: false,
        }}
        color="#120a8f"
        height={3}
      />
      <Component {...pageProps} />
    </Provider>
  );
}
