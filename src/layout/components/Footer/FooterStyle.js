import { makeStyles } from '@material-ui/core/styles';
import Send from '../../../assets/images/send.svg';

const footerStyle = makeStyles({
  root: {
    padding: '52px 0',
    color: '#fff',
    background: '#151b39',
    width: '100%',
    display: 'inline-block',
    fontSize: '12px',
    marginTop: '36px',
  },
  footerTop: {
    display: 'flex',
    opacity: '.8',
    minWidth: '1030px',
    maxWidth: '1280px',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '0 10px',
    marginBottom: '42px',
  },
  footerLogo: {
    marginRight: '55px',
    borderRight: '1px solid rgba(195,195,195,.5)',
    height: '55px',
    lineHeight: '55px',
    width: '159px',
    color: '#fff',
    textAlign: 'center',
  },
  logoImage: {
    verticalAlign: 'middle',
    borderStyle: 'none',
    maxWidth: '40%',
    position: 'relative',
    top: '-20px',
  },
  footerText: {
    width: '46%',
    padding: '5px 0',
  },
  footerLists: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  listSubheader: {
    fontSize: '12px',
    padding: 0,
    color: '#fff',
    opacity: 0.6,
    textTransform: 'uppercase',
  },
  listItem: {
    color: '#fff !important',
    lineHeight: '22px',
    fontSize: '12px',
    padding: 0,
  },
  footerContainer: {
    maxWidth: '1240px',
    display: 'flex',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '0 50px',
    justifyContent: 'space-between',
  },
  subscribe: {
    width: '284px',
    marginLeft: '32px',
    paddingLeft: '32px',
    borderLeft: '1px solid rgba(195,195,195,.5)',
  },
  subscribeHeading: {
    fontSize: '12px',
    padding: 0,
    color: '#fff',
    opacity: 0.6,
    textTransform: 'uppercase',
  },
  subscribeForm: {
    marginTop: '24px',
  },
  subscribeControl: {
    display: 'inline-block',
    textDecoration: 'none',
  },
  subscribeInput: {
    width: '207px',
    height: '40px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    border: 0,
    padding: '0 12px',
  },
  goBtn: {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    borderRadius: '5px',
    background: `#24aeb1 url(${Send}) no-repeat center/18px !important`,
    border: 0,
    padding: '12px',
    fontSize: 0,
    top: '-40px',
    left: '235px',
    position: 'relative',
  },
  playstoreDiv: {
    display: 'inline-block',
  },
  storeIcon1: {
    width: '46%',
    display: 'block',
    float: 'left',
    margin: '2px 2px 0 0',
    textDecoration: 'none',
  },
  storeIcon2: {
    width: '46%',
    display: 'block',
    margin: '19px 16px 0 0',
    marginRight: 0,
    textDecoration: 'none',
    float: 'right',
  },
  storeIconImg: {
    verticalAlign: 'middle',
    borderStyle: 'none',
    maxWidth: '100%',
  },
  txtWhite: {
    color: '#fff',
  },
});

export default footerStyle;
