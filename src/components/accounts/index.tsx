import {
  Box,
  Text,
  Flex,
  VStack,
  Center,
} from "@chakra-ui/react";

import { IoCopyOutline } from "react-icons/io5";
import Transactions from "./transactions";
import { useOverview } from "./hooks";
import Assets from "./assets";
import AssetChart from "./asset_chart";
import Staking from "./staking";


export default function AccountDetail() {
  const { balances, address, evmAddress, completed} = useOverview()

  return (
    <Box minH="100vh">
      <Flex gap={6} flexWrap="wrap" mb={8}>
        {/* Portfolio Balance */}
        <Flex flex={1} gap={6} flexDirection="column">
          <Box
            bg="#FAFBFC"
            p={6}
            borderRadius="md"
            boxShadow="sm"
            flex="1"
            minW="320px"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Portfolio
            </Text>
            <VStack gap={0} align={"left"}>
              <Text>Address: </Text>
              <Flex gap={2}>
                <Text>{address}</Text>
                <Center>
                  <IoCopyOutline />
                </Center>
              </Flex>
            </VStack>
            <VStack gap={0} align={"left"} mb={3}>
              <Text>EVM address: </Text>
              <Flex gap={2}>
                <Text>{evmAddress}</Text>
                <Center>
                  <IoCopyOutline />
                </Center>
              </Flex>
            </VStack> 
          </Box>
          <Assets balances={balances} />
        </Flex>

        <AssetChart balances={balances} />
      </Flex>
      <Staking address={address} />
      <Transactions />
    </Box>
  );
}
