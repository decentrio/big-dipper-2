import Layout from '@/components/layout/layout';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import {
  ChakraProvider, defaultSystem,
} from '@chakra-ui/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { DefaultSeo } from 'next-seo';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/graphql/client';
import { chainConfig } from '@/configs';
import { useWindowOrigin } from '@/hooks/use_window';
import { ChainProvider } from '@cosmos-kit/react';

// CosmosKit imports:
import { Chain } from '@chain-registry/types';
import { Decimal } from '@cosmjs/math';
import { GasPrice } from '@cosmjs/stargate';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as leapWallets } from '@cosmos-kit/leap';
import { wallets as ledgerWallets } from '@cosmos-kit/ledger';
import {
  chains, assets,
} from 'chain-registry';
import {
  OPEN_GRAPH_SEO,
  TWITTER_SEO,
  ADDITIONAL_LINK_TAGS_SEO,
  ADDITIONAL_META_TAGS,
  SEO_TITLE,
  SEO_DESCRIPTION,
} from './utils';

function App({
  Component, pageProps,
}: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { location } = useWindowOrigin();

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${chainConfig.title}`}
        title={SEO_TITLE}
        defaultTitle={chainConfig.title}
        description={SEO_DESCRIPTION}
        canonical={location}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: `${chainConfig.title}`,
          description: SEO_DESCRIPTION,
          url: location,
          ...OPEN_GRAPH_SEO,
        }}
        twitter={TWITTER_SEO}
        additionalLinkTags={ADDITIONAL_LINK_TAGS_SEO}
        additionalMetaTags={ADDITIONAL_META_TAGS}
      />
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <ChakraProvider value={defaultSystem}>
            <ChainProvider
              chains={chains}
              assetLists={assets}
              wallets={[
                ...keplrWallets,
                ...leapWallets,
                ...ledgerWallets,
              ]}
              walletConnectOptions={{
                signClient: {
                  // TODO new projectId
                  projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
                  relayUrl: 'wss://relay.walletconnect.org',
                  metadata: {
                    name: 'CosmosKit Template',
                    description: 'CosmosKit dapp template',
                    url: 'https://docs.cosmoskit.com/',
                    icons: [],
                  },
                },
              }}
              // wrappedWithChakra
              signerOptions={{
                signingStargate: (chain: Chain) => {
                  switch (chain.chain_name) {
                    case 'realio':
                      return {
                        gasPrice: new GasPrice(Decimal.zero(1), 'ario'),
                      };
                    default:
                      return undefined;
                  }
                },
              }}
            >

              <ThemeProvider attribute="class" disableTransitionOnChange>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
            </ChainProvider>
          </ChakraProvider>
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

export default App;
