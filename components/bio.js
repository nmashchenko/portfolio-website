import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const BioSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 0.5em;
`;

export const BioYear = styled.span`
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
  padding: 6px 8px 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #2f3239;
  border: 1px solid rgba(188, 202, 235, 0.4);
`;
