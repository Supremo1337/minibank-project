import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../components/TranferActivities/stylesTableLib.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100;600&family=Poppins&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}
