import { makeStyles } from '@material-ui/core/styles';
import MSImg from '../../../../assets/images/membership_super_member.svg';
import FlashIcon from '../../../../assets/images/flash.svg';

const nfStyle = makeStyles({
  nfSection: {
    margin: '8px 18px',
    padding: '16px 24px',
    borderRadius: '8px',
    background: '#fff',
    position: 'relative',
    overflow: 'hidden',
    maxHeight: '312px',
  },
  leftBlock: {
    float: 'left',
    '& h2': {
      fontFamily: 'Lato',
      fontSize: '12px',
      margin: 0,
      color: '#6f7284',
      letterSpacing: '1px',
      padding: '0 0 16px',
      fontWeight: 700,
    },
  },
  sectionH2: {
    fontSize: '12px',
    margin: '0px',
    color: '#6F7284',
    letterSpacing: '1px',
    padding: '0px 0px 16px',
  },
  secH2Span: {
    color: '#151b39',
    fontSize: '20px',
    letterSpacing: '0.25px',
    display: 'block',
    padding: '4px 0',
  },
  secH2Small: {
    fontSize: '12px',
    fontFamily: 'Robot',
    letterSpacing: 0,
    display: 'block',
  },
  memberOffers: {
    margin: 0,
    padding: '16px 16px 0 0',
    clear: 'both',
    display: 'inline-block',
    width: '100%',
  },
  listItem: {
    listStyle: 'none',
    float: 'left',
    width: '33.3%',
    padding: '0 8px 0',
    textAlign: 'center',
    minHeight: '100px',
    '& ::marker': {
      listStyle: 'none',
      textAlign: 'center',
    },
    '& h5': {
      padding: 0,
      margin: '2px 0',
      fontFamily: 'Lato',
      fontSize: '12px',
      color: '#151b39',
      lineHeight: '16px',
      fontWeight: 700,
    },
    '& p': {
      margin: 0,
      minHeight: '20px',
      fontFamily: 'Lato',
      fontSize: '8px',
      color: 'rgba(21,27,57,.6)',
      lineHeight: '10px',
    },
  },
  offerImg: {
    verticalAlign: 'middle',
    borderStyle: 'none',
    maxWidth: '100%',
  },
  rightBlock: {
    float: 'right',
    background: 'none !important',
  },
  saveMore: {
    margin: 0,
    padding: '0 0 0 16px',
    clear: 'both',
    display: 'inline-block',
    height: '-webkit-fill-available',
    width: '100%',
  },
  primeIcon: {
    display: 'block',
    width: '64px',
    height: '64px',
    background: `rgba(36,174,177,.1) url(${MSImg}) no-repeat center`,
    borderRadius: '50%',
    marginBottom: '12px',
    backgroundSize: '32px',
  },
  saveMoreh2: {
    height: '24px',
    fontFamily: 'Lato',
    fontSize: '20px',
    fontWeight: 400,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '.25px',
    color: '#151b39',
  },
  txtUl: {
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: 0,
    fontFamily: 'Lato',
    display: 'block',
    margin: '8px 0 16px',
    color: '#6f7284',
    listStylePosition: 'inside',
    padding: 0,
  },
  txtLi: {
    '& ::marker': {
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: 0,
      fontFamily: 'Lato',
      color: '#6f7284',
      listStylePosition: 'inside',
    },
  },
  fMsg: {
    width: 'auto',
    background: `url('${FlashIcon}') no-repeat left center/32px !important`,
    paddingLeft: '40px',
    fontSize: '12px',
    color: '#ef4281',
    lineHeight: '32px',
    letterSpacing: 0,
    height: '32px',
  },
  explorePlans: {
    width: '155px',
    fontFamily: 'Lato',
    fontSize: '14px',
    color: '#fff',
    background: '#24aeb1',
    borderRadius: '4px',
    textTransform: 'uppercase',
    height: '36px',
    lineHeight: '36px',
    margin: '12px 0',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 700,
    display: 'block',
  },
  tcSpan: {
    textAlign: 'right',
    float: 'right',
    fontSize: '11px',
    fontFamily: 'Lato',
    color: 'rgba(111,114,132,.5)',
    position: 'absolute',
    bottom: '22px',
    right: '9px',
    fontWeight: 700,
  },
});

export default nfStyle;