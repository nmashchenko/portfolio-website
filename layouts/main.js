import { Box, Container } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <NavBar path={router.asPath} />

      <Container maxWidth="none" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
