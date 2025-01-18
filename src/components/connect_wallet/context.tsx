/* eslint-disable react/function-component-definition */
import {
  createContext, useContext, useMemo, FC, ReactNode,
} from 'react';
import { useRecoilState } from 'recoil';
import {
  writeUserAddress, writeIsUserLoggedIn,
} from '@/recoil/user';
import {
  ADDRESS_KEY, CONNECTION_TYPE,
} from '@/utils/localstorage';
import { chainConfig } from '@/configs';
import {
  WalletContextType, WalletType,
} from '@/recoil/wallet/types';
import {
  OfflineAminoSigner, OfflineDirectSigner,
} from '@keplr-wallet/types';
import { SigningStargateClient } from '@cosmjs/stargate';

export const WalletContext = createContext<WalletContextType | null>(null);

export const WalletProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [address, setAddress] = useRecoilState(writeUserAddress);
  const [isConnected, setIsConnected] = useRecoilState(writeIsUserLoggedIn);

  const value = useMemo<WalletContextType>(() => ({
    address,
    isConnected,
    getSigningClient: async () => {
      const walletType = localStorage.getItem(CONNECTION_TYPE) as WalletType;
      let signingClient: OfflineAminoSigner & OfflineDirectSigner;

      switch (walletType) {
        case 'Leap':
          if (!window.leap?.getOfflineSigner) {
            throw new Error('Leap wallet not properly initialized');
          }
          signingClient = window.leap.getOfflineSigner(chainConfig.chainId);
          break;
        case 'Keplr':
          if (!window.keplr?.getOfflineSigner) {
            throw new Error('Keplr wallet not properly initialized');
          }
          signingClient = window.keplr.getOfflineSigner(chainConfig.chainId);
          break;
        case 'Cosmostation':
          if (!window.cosmostation?.providers.keplr.getOfflineSigner) {
            throw new Error('Cosmostation wallet not properly initialized');
          }
          signingClient = window.cosmostation.providers.keplr.getOfflineSigner(chainConfig.chainId);
          break;
        default:
          throw new Error('Unsupported wallet type');
      }
      if (!signingClient) {
        throw new Error('No signing client available');
      }

      const client = await SigningStargateClient.connectWithSigner(
        chainConfig.rpc,
        signingClient,
      );

      return {
        address,
        signAndBroadcast: async (signerAddress: string, messages: any[], fee: any) => {
          const result = await client.signAndBroadcast(signerAddress, messages, fee);
          return result;
        },
      };
    },
    connect: async (walletType: WalletType) => {
      let walletClient;

      switch (walletType) {
        case 'Leap':
          if (!window.leap) throw new Error('Leap wallet not installed');
          walletClient = window.leap;
          break;
        case 'Keplr':
          if (!window.keplr) throw new Error('Keplr wallet not installed');
          walletClient = window.keplr;
          break;
        case 'Cosmostation':
          if (!window.cosmostation) throw new Error('Cosmostation wallet not installed');
          walletClient = window.cosmostation.providers.keplr;
          break;
        default:
          throw new Error('Unsupported wallet type');
      }

      await walletClient.enable(chainConfig.chainId);
      const accounts = await walletClient.getOfflineSigner(chainConfig.chainId).getAccounts();
      const newAddress = accounts[0].address;

      setAddress(newAddress);
      setIsConnected(true);
      localStorage.setItem(ADDRESS_KEY, newAddress);
      localStorage.setItem(CONNECTION_TYPE, walletType);
    },
    disconnect: () => {
      setAddress('');
      setIsConnected(false);
      localStorage.removeItem(ADDRESS_KEY);
      localStorage.removeItem(CONNECTION_TYPE);
    },
  }), [address, isConnected, setAddress, setIsConnected]);

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};
