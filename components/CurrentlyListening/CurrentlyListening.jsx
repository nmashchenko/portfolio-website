import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Section from "../Section/Section";
import { Bars } from "react-loader-spinner";
import CurrentSong from "../Spotify/CurrentSong";

const CurrentlyListening = () => {
  /** Passing color from here forces rerender of the page to update Particles color */
  const player = useColorModeValue("#22c35e", "#90edb3");

  return (
    <Section delay={0.7}>
      <Box display="flex" gap="8px" alignItems="center">
        <Heading as="h3" variant="section-title">
          Currently listening
        </Heading>
        <Bars
          height="24"
          width="24"
          color={player}
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Box>
      <CurrentSong />
    </Section>
  );
};

export default CurrentlyListening;
