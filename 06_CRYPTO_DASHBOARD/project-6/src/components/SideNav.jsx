import { Stack, HStack, Icon, Text, Heading, Box } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: LuArrowUpDown,
      text: "Transaction",
      link: "/transactions",
    },
  ];

  return (
    <Stack justify="space-between" boxShadow="lg" maxW="16rem" h="100vh">
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          @DOSOMECODING
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav, i) => (
            <HStack
              borderRadius="10px"
              key={i}
              mx="3"
              py="3"
              px="4"
              color="#797e82"
              _hover={{ bg: "#f3F3F7", color: "#171717" }}
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box my="6" mx="3">
        <HStack
          borderRadius="10px"
          mx="3"
          py="3"
          px="4"
          color="#797e82"
          _hover={{ bg: "#f3F3F7", color: "#171717" }}
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideNav;
