import Name from '@/components/name';
import { MsgDeposit } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import { PROPOSAL_DETAILS } from '@/utils/go_to_page';
import { Text } from '@chakra-ui/react';
import AppTrans from '@/components/AppTrans';
import useTranslation from 'next-translate/useTranslation';
import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

const LinkText: FC<PropsWithChildren<{ href: LinkProps['href'] }>> = (props) => {
  const { href, children } = props;
  return (
    <Link shallow href={href || ''}>
      {children}
    </Link>
  );
};

const DepositProposal: FC<{ message: MsgDeposit }> = (props) => {
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

  const depositor = useProfileRecoil(message.depositor);
  const depositorMoniker = depositor ? depositor?.name : message.depositor;

  return (
    <Text>
      <AppTrans
        i18nKey="message_contents:txDepositContent"
        components={[
          <Name address={message.depositor} name={depositorMoniker} />,
          <b />,
          <LinkText href={PROPOSAL_DETAILS(message.proposalId)}>#{message.proposalId}</LinkText>,
        ]}
        values={{
          amount: parsedAmount,
          proposal: message.proposalId,
        }}
      />
    </Text>
  );
};

export default DepositProposal;
