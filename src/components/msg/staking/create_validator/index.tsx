import { Text } from '@chakra-ui/react';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgCreateValidator } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateValidator: FC<{ message: MsgCreateValidator }> = (props) => {
  const { message } = props;

  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  return (
    <Text>
      <AppTrans
        i18nKey="message_contents:txCreateValidatorContent"
        components={[
          <Name address={message.delegatorAddress} name={delegatorMoniker} />,
          <Name
            address={message.validatorAddress}
            name={message?.description?.moniker || message.validatorAddress}
          />,
        ]}
      />
    </Text>
  );
};

export default CreateValidator;
