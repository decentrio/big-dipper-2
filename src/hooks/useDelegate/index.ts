import { MsgDelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx';
import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';
import { chainConfig } from '@/configs';
import { formatToken } from '@/utils/format_token';
import { useWallet } from '@/hooks/useWallet';

const { primaryTokenUnit } = chainConfig;

export const useDelegate = () => {
  const { getSigningClient } = useWallet();
  const toast = useToast();

  const delegate = useCallback(async (
    validatorAddress: string,
    amount: string,
  ) => {
    try {
      const signingClient = await getSigningClient();
      if (!signingClient) {
        throw new Error('No signing client available');
      }

      const delegateMsg = {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: MsgDelegate.fromPartial({
          delegatorAddress: signingClient.address,
          validatorAddress,
          amount: {
            denom: primaryTokenUnit,
            amount,
          },
        }),
      };

      // Sign and broadcast the transaction
      const tx = await signingClient.signAndBroadcast(
        signingClient.address,
        [delegateMsg],
        {
          amount: [{
            denom: primaryTokenUnit, amount: '5000',
          }],
          gas: '200000', // TODO: dynamic gas
        },
      );

      if (tx.code !== 0) {
        throw new Error(tx.rawLog);
      }

      const formattedAmount = formatToken(amount, primaryTokenUnit);
      toast({
        title: 'Delegation successful',
        description: `Delegated ${formattedAmount.value} ${formattedAmount.displayDenom.toUpperCase()}`,
        status: 'success',
      });

      return tx;
    } catch (error) {
      toast({
        title: 'Delegation failed',
        description: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      });
      throw error;
    }
  }, [getSigningClient, toast]);

  return { delegate };
};
