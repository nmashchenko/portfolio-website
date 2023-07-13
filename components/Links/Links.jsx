import { Heading, IconButton, Link, List, ListItem } from "@chakra-ui/react";
import Section from "../Section/Section";
import { links } from "../../constants/links";

export const Links = () => {
  return (
    <Section delay={0.8}>
      <Heading as={"h3"} variant={"section-title"}>
        On the web
      </Heading>
      <List
        display={"flex"}
        gap={"12px"}
        justifyContent="center"
        alignItems="center"
      >
        {links.map((link, index) => (
          <ListItem key={index}>
            <Link href={link.href} target="_blank">
              <IconButton
                variant={"ghost"}
                colorScheme="teal"
                icon={link.icon}
                fontSize={"44px"}
                size="lg"
                padding={2}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
