import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize={"sm"} mt={"15px"} w="100">
      &copy; {new Date().getFullYear()} Nikita Mashchenko. All Rights Reserved.
    </Box>
  );
};

export default Footer;
