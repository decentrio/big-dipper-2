import { useContext } from 'react';
import { WalletContextType } from '@/recoil/wallet/types';
import { WalletContext } from '@/components/connect_wallet/context';

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};
