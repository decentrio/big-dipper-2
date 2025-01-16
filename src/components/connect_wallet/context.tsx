import {
  createContext, useContext, useMemo, FC, ReactNode,
} from 'react';
import { useRecoilState } from 'recoil';
import {
  writeUserAddress, writeIsUserLoggedIn,
} from '@/recoil/user';
import { ADDRESS_KEY } from '@/utils/localstorage';
import { chainConfig } from '@/configs';
import { WalletContextType } from '@/recoil/wallet/types';

const WalletContext = createContext<WalletContextType | null>(null);

export const WalletProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [address, setAddress] = useRecoilState(writeUserAddress);
  const [isConnected, setIsConnected] = useRecoilState(writeIsUserLoggedIn);

  const value = useMemo(() => ({
    address,
    isConnected,
    getSigningClient: async () => {
      const signingClient = window.leap?.getOfflineSigner(chainConfig.chainId);
      if (!signingClient) {
        throw new Error('No signing client available');
      }
      return {
        address,
        signAndBroadcast: async (signerAddress: string, messages: any[], fee: any) => {
          // Implementation for signing and broadcasting transactions
          const result = await signingClient.signAndBroadcast(signerAddress, messages, fee);
          return result;
        },
      };
    },
    connect: async () => {
      if (!window.leap) {
        throw new Error('Leap wallet not installed');
      }
      await window.leap.enable(chainConfig.chainId);
      const accounts = await window.leap.getOfflineSigner(chainConfig.chainId).getAccounts();
      const newAddress = accounts[0].address;

      setAddress(newAddress);
      setIsConnected(true);
      localStorage.setItem(ADDRESS_KEY, newAddress);
    },
    disconnect: () => {
      setAddress('');
      setIsConnected(false);
      localStorage.removeItem(ADDRESS_KEY);
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
