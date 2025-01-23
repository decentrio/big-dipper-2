import { useStyles } from '@/components/connect_wallet/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useRecoilState } from 'recoil';
import { writeWalletSelection } from '@/recoil/wallet';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import AppTrans from '@/components/AppTrans';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

type InstallKeplrExtensionDialogProps = {
  walletUrl: string;
  open: boolean;
  onClose: () => void;
};

const InstallKeplrExtensionDialog: FC<InstallKeplrExtensionDialogProps> = ({
  walletUrl,
  open,
  onClose,
}) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const [walletSelection] = useRecoilState(writeWalletSelection);

  const walletName = walletSelection || 'Keplr Wallet';

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <Typography className={classes.title} gutterBottom>
              {t('common:pleaseInstallWallet', {
                wallet: walletName,
              })}
            </Typography>
            <div>
              <Typography className={classes.subtitle}>
                <AppTrans
                  i18nKey="common:couldntFindWalletExtension"
                  components={[
                    <a target="_blank" rel="noreferrer" href={walletUrl}>
                      {}
                    </a>,
                  ]}
                  values={{
                    wallet: walletName,
                  }}
                />
              </Typography>
            </div>
            <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
      </Dialog>
    </div>
  );
};

export default InstallKeplrExtensionDialog;
