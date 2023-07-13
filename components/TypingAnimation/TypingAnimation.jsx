import { Box, useColorModeValue } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import Section from "../Section/Section";

const TypingAnimation = () => {
  return (
    <Section delay={0.3}>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        alignItems="center"
      >
        <TypeAnimation
          sequence={[
            "Hello, I'm a fullstack developer based in Chicago.",
            1000, // Waits 1s
            "Hello, I'm a backend developer based in Chicago.",
            1000, // Waits 1s
            "Hello, I'm a frontend developer based in Chicago.",
            2000, // Waits 1s
          ]}
          wrapper="span"
          style={{ fontSize: "16px", display: "inline-block" }}
          cursor={true}
          repeat={Infinity}
        />
      </Box>
    </Section>
  );
};

export default TypingAnimation;
