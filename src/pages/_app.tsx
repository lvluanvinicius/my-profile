import { globalStyles } from "@/styles/globals";
import { AppProps } from "next/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
