import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "center",
        xl: "flex-start",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: "0",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        {/* BOX 1 */}
        <Stack>
          <HStack color="black.80">
            <Text fontSize="xs" whiteSpace="nowrap">
              Total Portfolio Value
            </Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h4" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="xs" whiteSpace="nowrap">
              Wallet Balances
            </Text>
          </HStack>
          <HStack
            spacing="4"
            align={{
              base: "flex-start",
              xl: "center",
            }}
            flexDir={{
              base: "column",
              xl: "row",
            }}
          >
            <HStack>
              <Text textStyle="h4" fontWeight="medium">
                22.3940100
              </Text>
              <Tag fontSize="12" colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h4" fontWeight="medium">
                ₹ 1,300.00
              </Text>
              <Tag fontSize="12" colorScheme="gray">
                NPR
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      {/* Buttons */}
      <HStack fontSize="12px">
        <Button>
          <HStack>
            <Icon as={AiOutlineDownload}></Icon>
            <Text>Deposite</Text>
          </HStack>
        </Button>
        <Button>
          <HStack>
            <Icon as={BiMoneyWithdraw}></Icon>
            <Text>Withdraw</Text>
          </HStack>
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
