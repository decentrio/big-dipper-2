import { Text } from '@chakra-ui/react';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgChannelOpenAck } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const ChannelOpenAck: FC<{ message: MsgChannelOpenAck }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Text>
      <AppTrans
        i18nKey="message_contents:txChannelOpenAckContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          channelId: message.channelId,
          portId: message.portId,
          counterpartyChannelId: message.counterpartyChannelId,
          counterpartyVersion: message.counterpartyVersion,
        }}
      />
    </Text>
  );
};

export default ChannelOpenAck;
