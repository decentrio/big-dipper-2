import { Text } from '@chakra-ui/react';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgUpdateClient } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const UpdateClient: FC<{ message: MsgUpdateClient }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Text>
      <AppTrans
        i18nKey="message_contents:txUpdateClientContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          chainId: message.chainId,
          clientId: message.clientId,
        }}
      />
    </Text>
  );
};

export default UpdateClient;
