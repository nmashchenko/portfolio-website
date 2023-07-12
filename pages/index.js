import { ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import NextLink from "next/link";
import { IoLogoDiscord, IoLogoGithub, IoPaperPlane } from "react-icons/io5";
import { BioCard, BioCards, BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { frontend } from "../constants/frontend";
import { backend } from "../constants/backend";
import { general } from "../constants/general";
import { languages } from "../constants/languages";
import dynamic from "next/dynamic";

const Page = () => {
  const color = useColorModeValue(
    "rgba(255, 255, 255, 0.36)",
    "rgba(255, 255, 255, 0.08)"
  );

  // dynamically importing the countdown in order to prevent bug with difference
  const Particles = dynamic(
    () => import("../components/ParticlesContainer/ParticlesContainer"),
    {
      ssr: false,
    }
  );

  return (
    <>
      <Layout>
        <Container display="flex" flexDirection={"column"} gap="20px" mt="15">
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
                src="/images/me.jpg"
                alt="Profile Image"
              />
            </Box>
          </Box>

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

          <Section delay={0.2}>
            <Heading as={"h3"} variant={"section-title"}>
              Work
            </Heading>
            <Paragraph>
              I recently graduated from UIC and possess strong expertise in full
              stack development. I take great pride in my most notable project:
              <a href="https://teameights.com/" target="_blank">
                {" "}
                Teameights
              </a>
              , which is a web-based platform that facilitates collaboration
              among developers, designers, project managers, and other
              professionals to collectively work on exciting pet projects.
            </Paragraph>
          </Section>

          <Section delay={0.3}>
            <Box
              display={"flex"}
              gap={10}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box align="center" my={4}>
                <Button
                  as={NextLink}
                  href="/resume.pdf"
                  download=""
                  scroll={false}
                  rightIcon={<DownloadIcon />}
                  colorScheme="whatsapp"
                >
                  Download CV
                </Button>
              </Box>
              <Box align="center" my={4}>
                <Button
                  as={NextLink}
                  href="/works"
                  scroll={false}
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="teal"
                >
                  My Works
                </Button>
              </Box>
            </Box>
          </Section>

          <Section delay={0.5}>
            <Heading as={"h3"} variant={"section-title"}>
              Skills
            </Heading>
            <BioSection>
              <BioYear>Frontend</BioYear>
              <BioCards>
                {frontend.map((technology, index) => (
                  <BioCard key={index} bg={color}>
                    {technology}
                  </BioCard>
                ))}
              </BioCards>
            </BioSection>
            <BioSection>
              <BioYear>Backend</BioYear>
              <BioCards>
                {backend.map((technology, index) => (
                  <BioCard key={index} bg={color}>
                    {technology}
                  </BioCard>
                ))}
              </BioCards>
            </BioSection>
            <BioSection>
              <BioYear>General</BioYear>
              <BioCards>
                {general.map((technology, index) => (
                  <BioCard key={index} bg={color}>
                    {technology}
                  </BioCard>
                ))}
              </BioCards>
            </BioSection>
            <BioSection>
              <BioYear>Languages</BioYear>
              <BioCards>
                {languages.map((language, index) => (
                  <BioCard key={index} bg={color}>
                    {language}
                  </BioCard>
                ))}
              </BioCards>
            </BioSection>
          </Section>

          <Section delay={0.7}>
            <Heading as="h3" variant="section-title">
              My Hobbies ♥
            </Heading>
            <Paragraph>
              Games, reading, music, side projects, new technologies
            </Paragraph>
          </Section>

          <Section delay={0.9}>
            <Heading as={"h3"} variant={"section-title"}>
              On the web
            </Heading>
            <List display={"flex"} flexDirection={"column"} gap={"12px"}>
              <ListItem>
                <Link href="https://github.com/exortme1ster" target="_blank">
                  <Button
                    // variant={"ghost"}
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoGithub} />}
                  >
                    @exortme1ster
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://t.me/pRod1gyy" target="_blank">
                  <Button
                    // variant={"ghost"}
                    colorScheme="teal"
                    leftIcon={<Icon as={IoPaperPlane} />}
                  >
                    @pRod1gyy
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://discord.gg" target="_blank">
                  <Button
                    // variant={"ghost"}
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoDiscord} />}
                  >
                    @prod1gy_
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Container>
      </Layout>
      <Particles />
    </>
  );
};
export default Page;
