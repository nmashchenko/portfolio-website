import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "../footer";
import NavBar from "../navbar";
import VoxelDogLoader from "../voxel-dog-loader";

const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
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

      <Container maxWidth="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
