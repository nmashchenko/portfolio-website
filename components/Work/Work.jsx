import { Heading } from "@chakra-ui/react";
import Section from "../Section/Section";
import { Paragraph } from "./Work.styles";

export const Work = () => {
  return (
    <Section delay={0.4}>
      <Heading as={"h3"} variant={"section-title"}>
        Work
      </Heading>
      <Paragraph>
        I recently graduated from UIC and possess strong expertise in full stack
        development. I take great pride in my most notable project:
        <a href="https://teameights.com/" target="_blank">
          {" "}
          Teameights
        </a>
        , which is a web-based platform that facilitates collaboration among
        developers, designers, project managers, and other professionals to
        collectively work on exciting pet projects.
      </Paragraph>
    </Section>
  );
};
