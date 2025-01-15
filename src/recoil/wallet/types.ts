export interface AtomState {
  openAuthorizeConnectionDialog: boolean;
  openInstallKeplrExtensionDialog: boolean;
  openLoginDialog: boolean;
  openLoginSuccessDialog: boolean;
  openPairConnectWalletDialog: boolean;
  openPairKeplrExtensionDialog: boolean;
  openSelectNetworkDialog: boolean;
  walletConnectURI: string;
  walletSelection: string;
}

export interface WalletClient {
  address: string;
  signAndBroadcast: (signerAddress: string, messages: any[], fee: any) => Promise<any>;
}

export interface WalletContextType {
  address: string | undefined;
  isConnected: boolean;
  getSigningClient: () => Promise<WalletClient | null>;
  connect: () => Promise<void>;
  disconnect: () => void;
}
