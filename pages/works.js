import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { WorkItem } from "../components/WorkItem/WorkItem";
import Layout from "../layouts/page";

import { projects } from "../constants/projects";
const Works = () => (
  <Layout title="Works">
    <Container
      minHeight="calc(100dvh - 127px)"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      maxWidth="none"
      padding="30px 0 30px 0"
    >
      <Box
        display="flex"
        flexWrap="wrap"
        gap="20px"
        justifyContent="center"
        alignItems="center"
      >
        {projects.map((project, index) => (
          <WorkItem
            id="teameights"
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            thumbnail={project.image}
            link={project.link}
            key={index}
          />
        ))}
      </Box>
    </Container>
  </Layout>
);

export default Works;
