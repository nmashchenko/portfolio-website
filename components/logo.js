import { Link, Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import FootprintIcon from "./icons/footprint";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  gap: 8px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <FootprintIcon />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          // fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
        >
          Nikita Mashchenko
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
