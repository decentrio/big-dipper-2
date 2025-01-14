import {
  Box,
  Text,
  Flex,
  VStack,
  Stat,
  StatLabel,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumnHeader,
  Link,
  HStack,
  TableRoot,
  StatValueText,
  Icon,
  Center,
} from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { TfiReload } from "react-icons/tfi";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import { IoCopyOutline } from "react-icons/io5";
import Transactions from "./transactions";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AccountDetail() {
  // Donut Chart Data
  const chartData = {
    labels: ["RST", "RIO", "XLM", "USDC", "LMX"],
    datasets: [
      {
        data: [3.55, 1.55, 0.55, 0.25, 0.15], // Example values
        backgroundColor: [
          "#364FC7",
          "#4C6EF5",
          "#5C7CFA",
          "#63E6BE",
          "#94D82D",
        ],
        hoverBackgroundColor: [
          "#364FC7",
          "#4C6EF5",
          "#5C7CFA",
          "#63E6BE",
          "#94D82D",
        ],
      },
    ],
  };

  const assetOptions = {
    plugins: {
      legend: { display: false },
    },
  };

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
              Portfolio Balance
            </Text>
            <VStack gap={0} align={"left"}>
              <Text>Cosmos address: </Text>
              <Flex gap={2}>
                <Text>realio13zz4mgwmppzlnve09zshqlf4r2x4uqtwf6ckzk</Text>
                <Center>
                  <IoCopyOutline />
                </Center>
              </Flex>
            </VStack>
            <VStack gap={0} align={"left"} mb={3}>
              <Text>EVM address: </Text>
              <Flex gap={2}>
                <Text>0xB728E158dF70DbB2B3a140D125C5a45E54b64bDB</Text>
                <Center>
                  <IoCopyOutline />
                </Center>
              </Flex>
            </VStack>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              gap={4}
            >
              <Stat.Root bg="white" padding={2}>
                <StatLabel>Total</StatLabel>
                <StatValueText>$4.24</StatValueText>
              </Stat.Root>
              <Stat.Root bg="white" padding={2}>
                <StatLabel>Available to Invest</StatLabel>
                <StatValueText>$4.24</StatValueText>
              </Stat.Root>
              <Stat.Root bg="white" padding={2}>
                <StatLabel>Investment Holdings</StatLabel>
                <StatValueText>$0.00</StatValueText>
              </Stat.Root>
            </Flex>
          </Box>
          <Box
            bg="#FAFBFC"
            p={6}
            borderRadius="md"
            boxShadow="sm"
            flex="2"
            minW="320px"
          >
            <Flex justify="space-between" align="center" mb={4}>
              <Text fontSize="lg" fontWeight="bold">
                Assets
              </Text>
              <Icon fontSize="md" color="black.700">
                <TfiReload />
              </Icon>
            </Flex>
            <VStack align="stretch">
              {["RST", "LMX", "RIO", "RIOS"].map((asset, i) => (
                <Flex
                  bg="white"
                  padding={2}
                  borderRadius={4}
                  key={i}
                  justify="space-between"
                  align="center"
                >
                  <HStack>
                    {/* Use Box for simple shapes */}
                    <Box
                      as="span"
                      display="inline-block"
                      w="40px"
                      h="40px"
                      bg="black"
                      borderRadius="50%"
                    />
                    <Box>
                      <Text fontWeight="medium">{asset}</Text>
                      <Text fontSize="sm" color="green.500">
                        0.0049327 ($0.00)
                      </Text>
                    </Box>
                  </HStack>
                  <Text fontWeight="bold" color="blue.500">
                    $0.70
                  </Text>
                </Flex>
              ))}
            </VStack>
          </Box>
        </Flex>

        {/* Donut Chart */}
        <Box
          bg="#FAFBFC"
          p={6}
          borderRadius="md"
          boxShadow="sm"
          flex="1"
          minW="320px"
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Portfolio / USD
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={10}
            h="100%"
          >
            <VStack align="stretch">
              <Flex justify="center" align="center" mb={4}>
                <Box w="350px" h="350px">
                  <Doughnut data={chartData} options={assetOptions} />
                </Box>
              </Flex>
            </VStack>
            {/* Chart Legend */}
            <VStack w="100%" align="stretch">
              <HStack justify="space-between">
                <Text>RST</Text>
                <Text fontWeight="bold">$3.55</Text>
              </HStack>
              <ProgressRoot shape={"full"} size="lg" w="100%" value={58.7}>
                <ProgressBar />
              </ProgressRoot>
              <HStack justify="space-between">
                <Text>RIO</Text>
                <Text fontWeight="bold">$1.55</Text>
              </HStack>
              <ProgressRoot shape={"full"} size="lg" w="100%" value={30}>
                <ProgressBar />
              </ProgressRoot>
              <HStack justify="space-between">
                <Text>XLM</Text>
                <Text fontWeight="bold">$0.55</Text>
              </HStack>
              <ProgressRoot shape={"full"} size="lg" w="100%" value={30}>
                <ProgressBar />
              </ProgressRoot>
              <HStack justify="space-between">
                <Text>USDC</Text>
                <Text fontWeight="bold">$0.25</Text>
              </HStack>
              <ProgressRoot
                sx={{
                  "& > div": {
                    backgroundColor: "#FF5733",
                  },
                }}
                shape={"full"}
                size="lg"
                w="100%"
                value={30}
              >
                <ProgressBar />
              </ProgressRoot>
              <HStack justify="space-between">
                <Text>LMX</Text>
                <Text fontWeight="bold">$0.15</Text>
              </HStack>
              <ProgressRoot
                colorPalette="yellow"
                variant="outline"
                bg
                shape={"full"}
                size="lg"
                w="100%"
                value={30}
              >
                <ProgressBar />
              </ProgressRoot>
            </VStack>
          </Flex>
        </Box>
      </Flex>

      <Transactions />
    </Box>
  );
}
