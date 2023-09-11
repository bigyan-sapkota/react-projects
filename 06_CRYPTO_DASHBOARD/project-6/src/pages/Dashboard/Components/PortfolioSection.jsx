import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl">
      <Stack>
        <HStack>
          <Text>Total Portfolio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
      </Stack>
    </HStack>
  );
};

export default PortfolioSection;
