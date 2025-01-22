import {
  Button,
  FormControl,
  FormLabel,
  VStack,
  NumberInput,
  NumberInputField,
  Box,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { chainConfig } from '@/configs';
import Big from 'big.js';
import { useWallet } from '@/hooks/useWallet';

interface DelegateFormProps {
  validatorAddress: string;
}

export function DelegateForm({ validatorAddress }: DelegateFormProps) {
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    getSigningClient, isConnected,
  } = useWallet();

  const handleDelegate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      return;
    }

    if (!amount || Big(amount).lte(0)) {
      throw new Error('Invalid amount');
    }

    setIsLoading(true);
    try {
      const signingClient = await getSigningClient();
      if (!signingClient) {
        throw new Error('No signing client available');
      }

      // Create delegation message
      const delegateMsg = {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: MsgDelegate.fromPartial({
          delegatorAddress: signingClient.address,
          validatorAddress,
          amount: {
            denom: chainConfig.primaryTokenUnit,
            amount,
          },
        }),
      };

      // Sign and broadcast
      const tx = await signingClient.signAndBroadcast(
        signingClient.address,
        [delegateMsg],
        {
          amount: [{
            denom: chainConfig.primaryTokenUnit, amount: '5000',
          }],
          gas: '200000',
        },
      );

      if (tx.code !== 0) {
        throw new Error(tx.rawLog);
      }
    } catch (error) {
      console.error('Delegation failed:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to delegate',
        status: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleDelegate}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Amount to Delegate</FormLabel>
            <NumberInput min={0}>
              <NumberInputField
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </NumberInput>
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isLoading}
            loadingText="Delegating..."
            isDisabled={!isConnected || !amount}
            w="full"
          >
            {isConnected ? 'Delegate' : 'Connect Wallet to Delegate'}
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default DelegateForm;
