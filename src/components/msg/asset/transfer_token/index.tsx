import { Text } from '@chakra-ui/react';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgExec } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Exec: FC<{ message: MsgExec }> = (props) => {
  const { message } = props;

  const grantee = useProfileRecoil(message.grantee);
  const granteeMoniker = grantee ? grantee?.name : message.grantee;

  return (
    <Text>
      <AppTrans
        i18nKey="message_contents:MsgExec"
        components={[<Name address={message.grantee} name={granteeMoniker} />]}
      />
    </Text>
  );
};

export default Exec;
