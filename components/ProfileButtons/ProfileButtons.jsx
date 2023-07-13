import { Box, Button } from "@chakra-ui/react";
import Section from "../Section/Section";
import { ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProfileButtons = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timeoutId;

    // Set the timeout
    timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timeoutId);
    };
  }, [loading]);

  return (
    <Section delay={0.5}>
      <Box
        display={"flex"}
        gap={{ base: 0, sm: 10 }}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/resume.pdf"
            scroll={false}
            rightIcon={!loading && <DownloadIcon />}
            colorScheme="whatsapp"
            onClick={() => setLoading(true)}
          >
            {loading ? (
              <ThreeDots
                height="24px"
                width="24px"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "            Download CV"
            )}
          </Button>
        </Box>
        <Box align="center" my={4}>
          <Button
            onClick={() => router.push("/works")}
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Works
          </Button>
        </Box>
      </Box>
    </Section>
  );
};

export default ProfileButtons;
