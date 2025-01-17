import Name from '@/components/name';
import { MsgSend } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import { Text } from '@chakra-ui/react';
import AppTrans from '@/components/AppTrans';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Send: FC<{ message: MsgSend }> = (props) => {
  const { t } = useTranslation('transactions');
  const { message } = props;

  const parsedAmount = message?.amount
    ?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    })
    .reduce(
      (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value
    );

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  const to = useProfileRecoil(message.toAddress);
  const toMoniker = to ? to?.name : message.toAddress;

  return (
    <Text>
      <AppTrans
        i18nKey="message_contents:txSendContent"
        components={[
          <Name address={message.fromAddress} name={fromMoniker} />,
          <b />,
          <Name address={message.toAddress} name={toMoniker} />,
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Text>
  );
};

export default Send;
