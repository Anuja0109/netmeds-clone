import { makeStyles } from '@material-ui/core/styles';

const welcomeTextStyle = makeStyles({
  landingTextSection: {
    margin: '8px 0',
    padding: '0 42px',
  },
  firstPara: {
    fontFamily: 'Lato',
    fontSize: '11px',
    letterSpacing: 'normal',
    marginBottom: '8px',
    color: '#6f7284',
    '& b': {
      fontWeight: 700,
    },
  },
  internalP: {
    display: 'inline-flex',
  },
  wPLink: {
    textDecoration: 'none',
    color: '#6f7284',
    outline: 0,
  },
  divider: {
    color: '#6f7284',
  },
});

export default welcomeTextStyle;
