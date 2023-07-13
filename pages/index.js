import { Container } from "@chakra-ui/react";
import Layout from "../layouts/page";

import ParticlesContainer from "../components/ParticlesContainer/ParticlesContainer";
import Profile from "../components/Profile/Profile";
import TypingAnimation from "../components/TypingAnimation/TypingAnimation";
import { Work } from "../components/Work/Work";
import ProfileButtons from "../components/ProfileButtons/ProfileButtons";
import Skills from "../components/Skills/Skills";
import CurrentlyListening from "../components/CurrentlyListening/CurrentlyListening";
import { Links } from "../components/Links/Links";

const Page = () => {
  return (
    <>
      <Layout>
        <Container display="flex" flexDirection={"column"} gap="20px" mt="15">
          <Profile />
          <TypingAnimation />
          <Work />
          <ProfileButtons />
          <Skills />
          <CurrentlyListening />
          <Links />
        </Container>
      </Layout>
      <ParticlesContainer />
    </>
  );
};
export default Page;
