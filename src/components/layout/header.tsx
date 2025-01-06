import {
  HStack,
  Text,
  Link,
  Input,
  Center,
  IconButton,
  Flex,
  useBreakpointValue,
  Image,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { WalletStatus } from '@cosmos-kit/core';
import { useChain } from '@cosmos-kit/react';

import { readMarket } from '@/recoil/market';
import { chainConfig } from '@/configs';
import { formatMarket } from '@/utils/format_market';

import { InputGroup } from '../ui/input-group';
import { Search } from '../icons/search';
import MenuDrawer from './menudrawer';
import SearchBar from './search';
import PageHeader from './page-header';

const chainNames = ['cosmoshub', 'osmosis'];

export default function Header() {
  // 1. Recoil-based market data
  const marketState = useRecoilValue(readMarket);
  const market = formatMarket(marketState);

  // 2. CosmosKit connect/disconnect logic
  const {
    username, connect, disconnect, wallet, status,
  } = useChain(chainNames[0]);
  const [globalStatus, setGlobalStatus] = useState<WalletStatus>(
    WalletStatus.Disconnected,
  );

  // 3. Global Connect Button
  const getGlobalButton = () => {
    if (status === 'Connecting') {
      return (
        <Button
          colorScheme="teal"
          size="md"
          mt={6}
          mb={2}
          disabled
        />
      );
    }
    if (status === 'Connected') {
      return (
        <HStack mt={6} mb={2}>
          <Button variant="outline">
            {wallet?.prettyName}
          </Button>
          <Button variant="outline">
            {username || 'My Account'}
          </Button>
          <Button
            colorScheme="teal"
            onClick={async () => {
              await disconnect();
              setGlobalStatus(WalletStatus.Disconnected);
            }}
          >
            Disconnect
          </Button>
        </HStack>
      );
    }

    // Default: If not connected
    return (
      <Button
        colorScheme="teal"
        size="md"
        mt={6}
        mb={2}
        onClick={() => connect()}
      >
        Connect Wallet
      </Button>
    );
  };

  // 4. Responsive check
  const isMobile = useBreakpointValue({
    base: true, md: false,
  });

  return !isMobile ? (
    <Flex w="full" gap="20px" align="center" pb="10" direction="column">
      <HStack w="full" justify="space-between">
        <HStack>
          <PageHeader />
          <HStack divideX="2px">
            <Text fontSize="16px">
              Supply:
              {' '}
              <Link fontWeight={600} color="black">
                {market.supply}
              </Link>
            </Text>
            <Text fontSize="16px" pl="2">
              Community Pool:
              {' '}
              <Link fontWeight={600} color="black">
                {market.communityPool}
              </Link>
            </Text>
          </HStack>
          <SearchBar />
          <Center
            w="250px"
            h="60px"
            borderRadius="60px"
            fontSize="16px"
            border="1px solid #e4e4e7"
          >
            {chainConfig.network}
          </Center>
        </HStack>

        {/* Right side: connect button */}
        <HStack>{getGlobalButton()}</HStack>
      </HStack>
    </Flex>
  ) : (
    <Flex flexDirection="column" w="100%" gap="20px" align="center" pb="10">
      <Flex w="full" gap="10px" align="center" pb="2" justify="space-between">
        <HStack>
          <Link asChild>
            <NextLink href="/">
              <Image w="50px" src="/images/logo.svg" alt="Realio Logo" />
            </NextLink>
          </Link>
          <Text fontSize="20px" fontWeight={600}>
            Realio
          </Text>
        </HStack>

        <Center
          w="200px"
          h="45px"
          borderRadius="60px"
          fontSize="12px"
          border="1px solid #e4e4e7"
        >
          {chainConfig.network}
        </Center>
        <MenuDrawer />
      </Flex>
      <InputGroup
        w="full"
        maxW={{
          base: '100%', lg: '550px',
        }}
        startElement={<Search />}
      >
        <Input
          h="50px"
          borderRadius="60px"
          fontSize="12px"
          w={{
            base: 'full', lg: '550px',
          }}
          placeholder="Search for validator / tx hash / block height / address"
        />
      </InputGroup>
      <HStack>{getGlobalButton()}</HStack>
    </Flex>
  );
}
