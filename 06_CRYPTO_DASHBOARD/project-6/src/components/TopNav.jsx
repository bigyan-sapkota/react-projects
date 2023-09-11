import {
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="60rem" h="16" justify="space-between" mx="auto">
        <Icon
          cursor="pointer"
          as={HiMiniBars3BottomLeft}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaCircleUser} fontSize="30" color="blue" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
