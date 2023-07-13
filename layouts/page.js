import Head from "next/head";
import React from "react";
import { GridItemStyle } from "../components/WorkItem/WorkItem";
import { Box } from "@chakra-ui/react";

const Layout = ({ children, title }) => {
  title = `${title} - Nikita Mashchenko`;

  return (
    <Box
      style={{ position: "relative" }}
      minHeight="calc(100dvh - 127px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <>
        {title && (
          <Head>
            <title>{title}</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </Box>
  );
};

export default Layout;
