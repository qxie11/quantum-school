import "antd/dist/antd";
import "@styles/index.scss";
import { Provider } from "react-redux";
import NextNprogress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { store } from "@store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNprogress color="#120a8f" height={3} />
      <Component {...pageProps} />
    </Provider>
  );
}
