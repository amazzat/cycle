import { withBlitz } from "app/blitz-client";
import { type AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withBlitz(App);
