import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { theme } from "../styles/theme";

import "../styles/slider.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
