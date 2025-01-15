import {
  Button,
  FormControl,
  FormLabel,
  VStack,
  NumberInput,
  NumberInputField,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDelegate } from '@/hooks/useDelegate';
import { chainConfig } from '@/configs';
import Big from 'big.js';

  interface DelegateFormProps {
    validatorAddress: string;
  }

export function DelegateForm({ validatorAddress }: DelegateFormProps) {
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { delegate } = useDelegate();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!amount || Big(amount).lte(0)) {
        throw new Error('Invalid amount');
      }

      setIsLoading(true);
      await delegate(validatorAddress, amount);
    } catch (error) {
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
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>
            Amount to Delegate (
            {chainConfig.primaryTokenUnit}
            )
          </FormLabel>
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
          isDisabled={!amount || Big(amount).lte(0)}
        >
          Delegate
        </Button>
      </VStack>
    </form>
  );
}
