import { Box, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import { Skeleton } from "../ui/skeleton";
import { useMarketRecoil } from "@/recoil/market";
import { useValidatorRecoil } from "@/recoil/validators/hooks";
import { useAssetRecoil } from "@/recoil/asset";

export default function Layout({ children }) {
  useMarketRecoil();
  useAssetRecoil();
  const { loading } = useValidatorRecoil();
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      bgColor="white"
      minH="100vh"
      color="black"
      pt={{ base: "15px", md: "50px" }}
      px={{ base: "15px", md: "50px" }}
    >
      {!isMobile ? (
        <>
          <Sidebar />
          <VStack w="full">
            <Header />
            {loading ? (
              <Skeleton height={400} />
            ) : (
              <Box w="full">{children}</Box>
            )}
            <Footer />
          </VStack>
        </>
      ) : (
        <VStack w="full">
          <Header />
          {loading ? <Skeleton height={400} /> : <Box w="full">{children}</Box>}
          <Footer />
        </VStack>
      )}
    </Flex>
  );
}
