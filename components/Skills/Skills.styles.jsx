import { Box, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const BioSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 0.5em;
`;

export const SkillName = styled.span`
  font-weight: bold;
`;

export const BioCards = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const BioCard = styled.div`
  display: flex;
  height: 30px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${(props) => props.bg || "#2f3239"};
  border: 1px solid rgba(188, 202, 235, 0.4);
  position: relative;
  cursor: pointer;
  transition: all 0.8ms ease;

  :hover {
    border: ${(props) =>
      props.shouldHighlight
        ? "#A5211F 1px solid"
        : useColorModeValue("#22c35e 1px solid", "#90edb3 1px solid")};
  }
`;

export const HeartWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -40%) rotate(20deg);
`;
