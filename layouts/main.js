import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mashchenko's homepage" />
        <meta name="author" content="Nikita Mashchenko" />
        <meta name="author" content="pRod1gy" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Nikita Mashchenko - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxWidth="none" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
