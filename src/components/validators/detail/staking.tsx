import { useState } from 'react';
import {
  Box,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@chakra-ui/react';
import NoData from '@/components/helper/nodata';
import { useStaking } from './hooks';
import { DelegateForm } from '../DelegateForm';

export default function Staking({ address }) {
  const [delegationsPage, setDelegationsPage] = useState(0);
  const [redelegationsPage, setRedelegationsPage] = useState(0);
  const [unbondingsPage, setUnbondingsPage] = useState(0);
  const {
    state, delegations, redelegations, unbondings, handleTabChange,
  } = useStaking(delegationsPage, redelegationsPage, unbondingsPage, address);

  return (
    <Tabs.Root
      value={state.tab + 1}
      variant="subtle"
      handleTabChange={(e) => handleTabChange(e, e.value - 1)}
    >
      <TabsList mb={5}>
        <TabsTrigger value={1}>
          Delegations (
          {delegations.count}
          )
        </TabsTrigger>
        <TabsTrigger value={2}>
          Redelegations (
          {redelegations.count}
          )
        </TabsTrigger>
        <TabsTrigger value={3}>
          Unbondings (
          {unbondings.count}
          )
        </TabsTrigger>
      </TabsList>
      {delegations?.data ? (
        <Box bg="#FAFBFC" p={6} borderRadius="md" boxShadow="sm" mb={8}>
          <DelegateForm validatorAddress={address} />
          <TabsContent value={1} />
          <TabsContent value={2} />
          <TabsContent value={3} />
        </Box>
      ) : (
        <NoData />
      )}
    </Tabs.Root>
  );
}
