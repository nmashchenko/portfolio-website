import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import Image from "next/image";
import React from "react";
import Section from "../Section/Section";
import Tilt from "react-parallax-tilt";

export const WorkItem = ({
  id,
  title,
  description,
  thumbnail,
  technologies,
}) => {
  const descriptionColor = useColorModeValue("#000", "#AAA6C3");
  const titleColor = useColorModeValue("#000", "#fff");

  return (
    <Section delay={0.2}>
      <Tilt
        tiltReverse={false}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="white"
        glarePosition="all"
        glareBorderRadius="10px"
      >
        <Box
          maxWidth="360px"
          width="100%"
          align="center"
          id={id}
          border="2px solid #2F3239"
          borderRadius="10px"
          padding="20px"
          display="flex"
          flexDir="column"
          gap="20px"
        >
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            maxWidth="296px"
            width="100%"
            height="auto"
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
          <Box display="flex" flexDir="column" gap="8px" alignItems="start">
            <Text fontSize={24} color={titleColor} fontWeight={800}>
              {title}
            </Text>
            <Text fontSize={16} textAlign="start" color={descriptionColor}>
              {description}
            </Text>
          </Box>
          <Box display="flex" gap="8px" alignItems="start">
            {technologies.map((technology, index) => (
              <Text fontSize={14} color="#88CCCA" fontWeight={800} key={index}>
                #{technology}
              </Text>
            ))}
          </Box>
        </Box>
      </Tilt>
    </Section>
  );
};

export const GridItemStyle = () => (
  <Global
    styles={`.grid-item-thumbnail {
		border-radius: 12px;
	}`}
  />
);
