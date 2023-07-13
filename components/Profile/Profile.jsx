import { Box, Heading, Image } from "@chakra-ui/react";
import Section from "../Section/Section";

const Profile = () => {
  return (
    <Section delay={0.2}>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nikita Mashchenko
          </Heading>
          <p>
            I&apos;m a recent CS grad who has mastered the art of spending a
            solid 12 hours a day coding. Social life? What&apos;s that?😁
          </p>
        </Box>
        <Box flexShrink={0} ml={{ md: 6 }} align="center">
          <Image
            borderColor={"whiteAlpha.800"}
            borderWidth={2}
            borderStyle={"solid"}
            maxWidth={"100px"}
            display={"inline-block"}
            objectFit={"cover"}
            borderRadius={"full"}
            src="/me.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Section>
  );
};

export default Profile;
