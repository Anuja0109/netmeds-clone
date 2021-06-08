import { makeStyles } from '@material-ui/core/styles';
import ArrowDrop from '../../../assets/images/white-arrow-drop-down.svg';
import Medicine from '../../../assets/images/medicine.png';
import Diagnostic from '../../../assets/images/diagnostics.svg';
import Wellness from '../../../assets/images/wellness.png';

const menuNavigationStyle = makeStyles({
  headerMenu: {
    background: '#32aeb1',
    // position: 'relative',
  },
  exploreMenu: {
    height: '56px',
    maxWidth: '1030px',
    margin: '0px auto',
    boxSizing: 'border-box',
    padding: '0px 10px',
  },
  menuList: {
    margin: '0px auto',
    padding: '0px',
    listStyle: 'none',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkItem: {
    display: 'inline-block',
    width: 'auto',
    padding: '5px 0 0',
    height: '46px',
    position: 'relative',
  },
  small: {
    height: '12px',
    fontFamily: 'Lato',
    fontSize: '10px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: 'rgba(255, 255, 255, 0.8)',
    display: 'inline-block',
    marginLeft: '47px',
  },
  mPro: {
    display: 'inline-block',
    width: 'auto',
    padding: '5px 0 0',
    height: '46px',
    position: 'relative',
    '&::before': {
      content: '',
      background: `url(${ArrowDrop}) 0 0 no-repeat`,
      width: '16px',
      height: '16px',
      display: 'inline-block',
      float: 'right',
      marginRight: '-24px',
    },
  },
  mProLink: {
    background: `url(${Medicine}) 0 0 no-repeat`,
    backgroundSize: '40px',
    paddingLeft: '48px !important',
    cursor: 'pointer',
    paddingTop: '4px !important',
    textDecoration: 'none',
    color: '#fff',
  },
  mProSubList: {
    display: 'none',
    position: 'absolute',
    background: '#f7f7f7',
    minWidth: '200px',
    boxShadow: '0 5px 10px -2px rgba(0,0,0,.2)',
    top: '40px',
    padding: 0,
    height: 'auto',
    left: '48px',
    zIndex: 2,
  },
  mProSubListItem: {
    margin: 0,
    padding: 0,
    height: 'auto',
    width: '100%',
  },
  mProSubListLink: {
    color: '#151b39',
    textDecoration: 'none',
    fontSize: '13px',
    height: '38px',
    lineHeight: '40px',
    display: 'block',
    width: '100%',
    padding: '0 12px',
  },
  hProLink: {
    background: `url(${Wellness}) 0 0 no-repeat`,
    backgroundSize: '40px',
    paddingLeft: '48px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
  },
  bCheck: {
    background: `url(${Diagnostic}) 0 0 no-repeat`,
    backgroundSize: '40px',
    paddingLeft: '48px',
    textDecoration: 'none',
    color: '#fff',
  },
  bApp: {
    background: `url(../images/icons/health-library.svg) 0 0 no-repeat`,
    backgroundSize: '40px',
    paddingLeft: '48px !important',
    cursor: 'pointer',
    paddingTop: '4px !important',
  },
});

export default menuNavigationStyle;
