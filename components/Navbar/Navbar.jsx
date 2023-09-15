import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { forwardRef } from "react";
import ThemeToggleButton from "../../components/ThemeToggle/ThemeToggle";
import { IoLogoGithub } from "react-icons/io5";
import Logo from "../Logo/Logo";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? "grassTeal" : undefined}
      borderRadius={10}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

MenuLink.displayName = "MenuLink";

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      backdropFilter={"blur(10px)"}
      zIndex={1}
      transform="translateZ(300px)"
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        align="center"
        justifyContent="center"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems={"center"}
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/nmashchenko/portfolio-website"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={"outline"}
                aria-label="Options"
              />
              <MenuList>
                <MenuItem
                  as={MenuLink}
                  href="/"
                  _focusVisible={{ boxShadow: "none" }}
                >
                  About
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/works"
                  _focusVisible={{ boxShadow: "none" }}
                >
                  Works
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/posts"
                  _focusVisible={{ boxShadow: "none" }}
                >
                  Posts
                </MenuItem>
                {/* <MenuItem
                  as={MenuLink}
                  href="https://github.com/velenyx/fullman-homepage"
                  _focusVisible={{ boxShadow: "none" }}
                >
                  View Source
                </MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
