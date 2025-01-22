import { Button } from '@/components/ui/button';
import {
  Box,
  Input,
  Text,
  VStack,
  Flex,
  InputAddon,
  Group,
} from '@chakra-ui/react';
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { chainConfig } from '@/configs';
import { MsgDelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx';
import Big from 'big.js';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { PubKey } from 'cosmjs-types/cosmos/crypto/secp256k1/keys';
import { Any } from 'cosmjs-types/google/protobuf/any';
import {
  makeAuthInfoBytes, makeSignDoc,
} from '@cosmjs/proto-signing';
import { CONNECTION_TYPE } from '@/utils/localstorage';
import { WalletType } from '@/recoil/wallet/types';
import { SigningStargateClient } from '@cosmjs/stargate';

// testing
import { fromBase64 } from '@cosmjs/encoding';
import { Int53 } from '@cosmjs/math';

interface DelegateDialogProps {
  validatorAddress: string;
}

export function DelegateDialog({
  validatorAddress,
}: DelegateDialogProps) {
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    getSigningClient, isConnected, address,
  } = useWallet();

  const handleDelegate = async () => {
    if (!isConnected) {
      // toast({
      //   title: 'Error',
      //   description: 'Please connect your wallet first',
      //   status: 'error',
      // });
      console.log('Please connect your wallet first');
      return;
    }

    if (!amount || Big(amount).lte(0)) {
      // toast({
      //   title: 'Error',
      //   description: 'Invalid amount',
      //   status: 'error',
      // });
      console.log('invalid amount');
      return;
    }

    setIsLoading(true);
    // try {
    //   const signingClient = await getSigningClient();
    //   if (!signingClient?.address) {
    //     throw new Error('No signing client available');
    //   }

    //   // Create delegation message
    //   const delegateMsg = {
    //     typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
    //     value: MsgDelegate.fromPartial({
    //       delegatorAddress: signingClient.address,
    //       validatorAddress,
    //       amount: {
    //         denom: chainConfig.primaryTokenUnit,
    //         amount,
    //       },
    //     }),
    //   };

    //   // Sign and broadcast
    //   const tx = await signingClient.signAndBroadcast(
    //     signingClient.address,
    //     [delegateMsg],
    //     {
    //       amount: [{
    //         denom: chainConfig.primaryTokenUnit,
    //         amount: '5000',
    //       }],
    //       gas: '200000',
    //       memo,
    //     },
    //   );

    //   if (tx.code !== 0) {
    //     throw new Error(tx.rawLog);
    //   }

    // toast({
    //   title: 'Success',
    //   description: 'Delegation successful',
    //   status: 'success',
    // });

    /// begin test
    try {
      validatorAddress = 'realiovaloper1q0ju3af59l2kp2vfywcjrmj07tkgkg0s9zfh03';
      const walletType = localStorage.getItem(CONNECTION_TYPE) as WalletType;
      if (!walletType) {
        throw new Error('No wallet connected');
      }

      // Get offline signer based on wallet type
      let signer;
      switch (walletType) {
        case 'Leap':
          signer = window.leap?.getOfflineSigner('realionetwork_3301-1');
          break;
        case 'Keplr':
          signer = window.keplr?.getOfflineSigner('realionetwork_3301-1');
          break;
        default:
          throw new Error('Unsupported wallet type');
      }

      if (!signer) {
        throw new Error('No signer available');
      }

      // Create delegation message with proper address checks
      if (!address || !validatorAddress) {
        console.log('address', address);
        console.log('validatorAddress', validatorAddress);
        throw new Error('Missing delegator or validator address');
      }

      // Create delegation message
      const delegateMsg = {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: MsgDelegate.fromPartial({
          delegatorAddress: address,
          validatorAddress,
          amount: {
            denom: chainConfig.primaryTokenUnit,
            amount,
          },
        }),
      };

      // Create fee
      const fee = {
        amount: [{
          denom: chainConfig.primaryTokenUnit,
          amount: '5000',
        }],
        gas: '300000',
      };

      // Create signing client
      const client = await SigningStargateClient.connectWithSigner(
        'https://realio.rpc.decentrio.ventures:443',
        signer,
      );

      // Get account info from API
      const accountResponse = await fetch(
        `https://realio.api.decentrio.ventures:443/cosmos/auth/v1beta1/accounts/${address}`,
      );
      const accountData = await accountResponse.json();
      const {
        account_number: accountNumber, sequence,
      } = accountData.account;

      // Get account from signer
      const accountFromSigner = (await signer.getAccounts()).find(
        (account) => account.address === address,
      );
      if (!accountFromSigner) {
        throw new Error('Failed to retrieve account from signer');
      }

      // Create custom pubkey
      const pubk = Any.fromPartial({
        typeUrl: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
        value: PubKey.encode({
          key: accountFromSigner.pubkey,
        }).finish(),
      });

      // Sign transaction
      const txBodyEncodeObject = {
        typeUrl: '/cosmos.tx.v1beta1.TxBody',
        value: {
          messages: [delegateMsg],
          memo,
        },
      };

      const txBodyBytes = client.registry.encode(txBodyEncodeObject);
      const gasLimit = Int53.fromString(fee.gas).toNumber();
      const authInfoBytes = makeAuthInfoBytes(
        [{
          pubkey: pubk, sequence,
        }],
        fee.amount,
        gasLimit,
        undefined, // feePayer
        undefined, // feeGranter
      );

      const signDoc = makeSignDoc(
        txBodyBytes,
        authInfoBytes,
        'realionetwork_3301-1',
        accountNumber,
      );

      const {
        signature, signed,
      } = await signer.signDirect(address, signDoc);

      // Create final tx bytes
      const txBytes = TxRaw.encode({
        bodyBytes: signed.bodyBytes,
        authInfoBytes: signed.authInfoBytes,
        signatures: [fromBase64(signature.signature)],
      }).finish();

      // Broadcast transaction
      const result = await client.broadcastTx(txBytes);
      console.log('Transaction result:', result);
      /// end test
      console.log('dc the deo nao dc', address, validatorAddress, amount);
    } catch (error) {
      // toast({
      //   title: 'Error',
      //   description: error instanceof Error ? error.message : 'Failed to delegate',
      //   status: 'error',
      // });
      console.log('loi roi', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DialogRoot size="md" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button bg="#707D8A" size="sm" colorScheme="blue">Delegate</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Flex justify="space-between">
            <DialogTitle>Delegate</DialogTitle>
            <DialogTrigger style={{ cursor: 'pointer' }}>
              <IoCloseOutline size={30} />
            </DialogTrigger>
          </Flex>
        </DialogHeader>
        <DialogBody>
          <VStack spacing={4} align="stretch">
            {/* Sender */}
            <Box>
              <Text fontSize="sm" mb={1}>Sender</Text>
              <Input readOnly value={address} placeholder="Connect wallet to delegate" />
            </Box>

            {/* Validator */}
            <Box>
              <Text fontSize="sm" mb={1}>Validator</Text>
              <Input readOnly value="realiovaloper1q0ju3af59l2kp2vfywcjrmj07tkgkg0s9zfh03" />
            </Box>

            {/* Amount */}
            <Box>
              <Flex justify="space-between" mb={1}>
                <Text fontSize="sm">Amount</Text>
                <Text fontSize="xs">
                  Available:
                  {/* Add balance here */}
                </Text>
              </Flex>
              <Group w="full" attached>
                <Input
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                />
                <InputAddon>{chainConfig.primaryTokenUnit}</InputAddon>
              </Group>
            </Box>

            {/* Memo */}
            <Box>
              <Text fontSize="sm" mb={1}>Memo (Optional)</Text>
              <Input
                placeholder="Enter memo"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </Box>
          </VStack>
        </DialogBody>
        <DialogFooter>
          <Button
            bg="#707D8A"
            w="full"
            colorScheme="blue"
            onClick={handleDelegate}
            isLoading={isLoading}
            isDisabled={!isConnected || !amount || Big(amount).lte(0)}
          >
            {isConnected ? 'Delegate' : 'Connect Wallet to Delegate'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
