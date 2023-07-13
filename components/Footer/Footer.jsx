import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize={"sm"}
      p={"25px 0 25px 0"}
      w="100"
    >
      &copy; {new Date().getFullYear()} Nikita Mashchenko. All Rights Reserved.
    </Box>
  );
};

export default Footer;
