import chainConfigTestnet from './chain_config.testnet.json';
import chainConfigMainnet from './chain_config.mainnet.json';
import keplr from './keplr.json';
import generalConfig from './general_config.json';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  const chainType = process.env.NEXT_PUBLIC_CHAIN_TYPE || process.env.NEXT_PUBLIC_CHAIN_STATUS;
  let config;
  if (chainType === 'mainnet') {
    config = chainConfigMainnet;
  } else {
    config = chainConfigTestnet;
  }
  return {
    ...config,
    keplr,
  };
};

const chainConfig = getChainConfig();

export {
  chainConfig,
  generalConfig,
};
