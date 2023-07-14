import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Fonts from "../lib/fonts";
import Layout from "../layouts/main";
import theme from "../lib/theme";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Analytics />
      <Fonts />
      <Layout router={router}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Mashchenko's homepage" />
          <meta name="author" content="Nikita Mashchenko" />
          <meta name="author" content="pRod1gy" />
        </Head>
        <AnimatePresence initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
