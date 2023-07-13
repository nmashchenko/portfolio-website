import { Heading, useColorModeValue } from "@chakra-ui/react";
import Section from "../Section/Section";
import {
  BioCard,
  BioCards,
  BioSection,
  HeartWrapper,
  SkillName,
} from "./Skills.styles";
import { frontend } from "../../constants/frontend";
import { backend } from "../../constants/backend";
import { general } from "../../constants/general";
import { languages } from "../../constants/languages";

const Skills = () => {
  const color = useColorModeValue(
    "rgba(255, 255, 255, 0.36)",
    "rgba(255, 255, 255, 0.08)"
  );

  return (
    <Section delay={0.6}>
      <Heading as={"h3"} variant={"section-title"}>
        Skills
      </Heading>
      <BioSection>
        <SkillName>Frontend</SkillName>
        <BioCards>
          {frontend.map((element, index) => (
            <BioCard
              key={index}
              bg={color}
              shouldHighlight={element.shouldHighlight}
            >
              {element.technology}
              {element.shouldHighlight && <HeartWrapper>❤️</HeartWrapper>}
            </BioCard>
          ))}
        </BioCards>
      </BioSection>
      <BioSection>
        <SkillName>Backend</SkillName>
        <BioCards>
          {backend.map((element, index) => (
            <BioCard
              key={index}
              bg={color}
              shouldHighlight={element.shouldHighlight}
            >
              {element.technology}
              {element.shouldHighlight && <HeartWrapper>❤️</HeartWrapper>}
            </BioCard>
          ))}
        </BioCards>
      </BioSection>
      <BioSection>
        <SkillName>General</SkillName>
        <BioCards>
          {general.map((technology, index) => (
            <BioCard key={index} bg={color}>
              {technology}
            </BioCard>
          ))}
        </BioCards>
      </BioSection>
      <BioSection>
        <SkillName>Languages</SkillName>
        <BioCards>
          {languages.map((language, index) => (
            <BioCard key={index} bg={color}>
              {language}
            </BioCard>
          ))}
        </BioCards>
      </BioSection>
    </Section>
  );
};

export default Skills;
