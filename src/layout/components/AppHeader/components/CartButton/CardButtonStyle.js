import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '../../../../../assets/images/shopping_cart_white.svg';

const cartButtonStyle = makeStyles({
  miniCart: {
    maxWidth: '30px',
    margin: '0 24px 0px 0px',
    position: 'relative',
  },
  miniCartLink: {
    textDecoration: 'none',
    outline: 0,
  },
  linkText: {
    background: `url(${ShoppingCartOutlinedIcon}) no-repeat center center`,
    color: '#231f20',
    height: '90px',
    padding: '0px',
    width: '24px',
    float: 'right',
    marginTop: '-10px',
  },
  cardCounter: {
    background: '#ee4380 !important',
    borderRadius: '6.5px',
    color: '#ffffff',
    display: 'block',
    fontSize: '10px',
    height: '13px',
    lineHeight: '14px',
    padding: '0px',
    position: 'absolute',
    right: '0px',
    textAlign: 'center',
    textIndent: '0px',
    top: '35px',
    width: '17px',
  },
});

export default cartButtonStyle;
