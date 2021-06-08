import { makeStyles } from '@material-ui/core/styles';

const messageStyle = makeStyles({
  messageBlock: {
    background: 'rgba(10,21,27,.08)',
    padding: '12px',
    marginTop: '16px',
    width: '100%',
  },
  messageContainer: {
    padding: 0,
    fontFamily: 'Lato',
    margin: '0 16px',
    width: '100%',
    color: '#151b39',
    '& h1': {
      fontFamily: 'LatoBold',
      fontSize: '18px',
      margin: 0,
    },
    '& p': {
      margin: '8px 0 0',
      fontSize: '14px',
    },
  },
});

export default messageStyle;
