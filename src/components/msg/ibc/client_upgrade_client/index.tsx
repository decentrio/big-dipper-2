import { Text } from '@chakra-ui/react';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgUpgradeClient } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const UpgradeClient: FC<{ message: MsgUpgradeClient }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Text>
      <AppTrans
        i18nKey="message_contents:txUpgradeClientContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          clientId: message.clientId,
        }}
      />
    </Text>
  );
};

export default UpgradeClient;
