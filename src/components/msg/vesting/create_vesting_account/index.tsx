import { Text } from '@chakra-ui/react';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgCreateVestingAccount } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateVestingAccount: FC<{ message: MsgCreateVestingAccount }> = (props) => {
  const { message } = props;

  const to = useProfileRecoil(message.toAddress);
  const toMoniker = to ? to?.name : message.toAddress;

  return (
    <Text>
      <AppTrans
        i18nKey="message_contents:MsgCreateVestingAccount"
        components={[<Name address={message.toAddress} name={toMoniker} />]}
      />
    </Text>
  );
};

export default CreateVestingAccount;
