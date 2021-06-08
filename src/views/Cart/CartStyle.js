import { makeStyles } from '@material-ui/core/styles';

const cartStyle = makeStyles(() => ({
  cartSection: {
    flexGrow: 1,
  },
  mycartHead: {
    width: '100%',
    maxWidth: '1030px',
    padding: '16px 0 16px 24px',
    margin: '0 auto',
    display: 'block',
    background: '0 0',
    textAlign: 'left',
    fontFamily: 'Lato',
    fontSize: '24px',
    color: '#151b39',
    fontWeight: 700,
  },
  cartBlock: {
    maxWidth: '1030px',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '0 10px',
  },
  cartEmpty: {
    width: '300px',
    margin: '4rem auto',
    textAlign: 'center',
    '& h3': {
      fontFamily: 'Lato',
      fontSize: '16px',
      color: '#151b39',
      lineHeight: '20px',
      textAlign: 'center',
      margin: '20px 0 8px',
      padding: 0,
    },
    '& p': {
      fontFamily: 'Lato',
      fontSize: '13px',
      color: 'rgba(21,27,57,.6)',
      lineHeight: '18px',
      textAlign: 'center',
      margin: '0 0 25px',
    },
  },
  emptyImg: {
    width: '75%',
    verticalAlign: 'middle',
    borderStyle: 'none',
  },
  cartBtn: {
    background: '#24aeb1',
    fontFamily: 'Lato',
    fontSize: '14px',
    color: '#fff',
    lineHeight: '16px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    width: '100%',
    display: 'inline-block',
    padding: '15px 0',
    fontWeight: 700,
    textDecoration: 'none',
  },
}));

export default cartStyle;
