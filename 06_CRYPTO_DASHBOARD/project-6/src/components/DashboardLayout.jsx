import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <SideNav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow="1">
        <TopNav title={title} onOpen={onOpen} />
        <Container mt="6" maxW="60rem">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
