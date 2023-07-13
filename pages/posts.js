import { Container, Text } from "@chakra-ui/react";
import Layout from "../layouts/page";
import Section from "../components/Section/Section";

const Posts = () => (
  <Layout title="Posts">
    <Container
      minHeight="calc(100dvh - 127px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Section delay={0.1}>
        <Text align="center" fontSize={24}>
          Will be ready soon 😴{" "}
        </Text>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
