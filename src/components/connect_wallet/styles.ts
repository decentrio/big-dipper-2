import { makeStyles } from 'tss-react/mui';

const styles = makeStyles()((theme) => ({
  // Keep only essential styles for connect wallet functionality
  dialog: {
    '& .MuiDialog-paper': {
      width: '330px',
      height: '330px',
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.up('md')]: {
        width: '561px',
        height: '550px',
      },
    },
  },

  dialogContent: {
    display: 'inline-flex',
    alignSelf: 'center',
    marginTop: '10px',
    [theme.breakpoints.up('md')]: {
      marginTop: '70px',
    },
  },

  dialogContentButton: {
    padding: '8px',
  },

  walletButton: {
    border: 'solid 1px',
    borderColor: theme.palette.divider,
    borderRadius: '24px',
    width: '120px',
    height: '120px',
    display: 'flex',
    padding: '16px',
    justifyContent: 'center',
    '&:hover': {
      background: theme.palette.action.hover,
    },
    [theme.breakpoints.up('md')]: {
      width: '153px',
      height: '152px',
    },
  },

  walletIcon: {
    display: 'inline-table',
  },

  closeButton: {
    position: 'absolute',
    right: '24px',
    top: '16px',
    color: theme.palette.grey[500],
  },
}));

export const useStyles = () => styles();
