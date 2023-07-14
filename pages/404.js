import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import Layout from "../layouts/page";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();

  return (
    <Layout title={"404"}>
      <Container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Heading as="h1" mb="3">
          Not Found
        </Heading>
        <Text>The page you&apos;re looking for was not found</Text>
        {/* <Divider my={6} /> */}
        <Box my={6} align="center">
          <Button colorScheme="teal" onClick={() => router.push("/")}>
            Return to home
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;
