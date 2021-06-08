import { makeStyles } from '@material-ui/core/styles';

const hcStyle = makeStyles({
  hcSection: {
    margin: '8px 18px',
    padding: '16px 24px 24px',
    fontFamily: 'Lato',
    borderRadius: '8px !important',
    background: '#fff',
    position: 'relative',
    overflow: 'visible',
    boxShadow: '0 1px 1px 0 rgba(171,169,169,.1)',
  },
  hch2: {
    fontFamily: 'Lato',
    fontSize: '12px',
    margin: 0,
    color: '#6f7284',
    letterSpacing: '1px',
    padding: '0 0 16px',
    '& span': {
      fontFamily: 'Lato',
      color: '#151b39',
      fontSize: '20px',
      letterSpacing: '.25px',
      display: 'block',
      padding: '4px 0',
    },
    '& small': {
      fontSize: '12px',
      fontFamily: 'Robot',
      letterSpacing: 0,
      display: 'block',
    },
  },
  slideSection: {
    height: '216px',
    padding: '16px 0 0 24px',
    position: 'relative',
    width: '100%',
  },
  slideLink: {
    position: 'absolute',
    zIndex: 1,
    textDecoration: 'none',
  },
  titleSpan: {
    width: '194px',
    height: '48px',
    fontFamily: 'Lato',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '1.5',
    letterSpacing: '0.15px',
    color: '#151b39',
    display: 'block',
    marginBottom: '16px',
  },
  shopNow: {
    width: '74px',
    height: '16px',
    fontFamily: 'Lato',
    fontSize: '12px',
    lineHeight: '1.33',
    letterSpacing: '1px',
    color: '#24aeb1',
    fontWeight: 700,
  },
  slideImg: {
    position: 'absolute',
    right: '30px',
    bottom: 0,
    maxWidth: '100%',
    borderStyle: 'none',
  },
  slideCommon: {
    width: '235px',
    marginRight: '16px',
  },
  slideOne: {
    background: 'rgb(255, 244, 235) none repeat scroll 0% 0%',
  },
  slideTwo: {
    background: 'rgb(246, 250, 232) none repeat scroll 0% 0%',
  },
  slideThree: {
    background: 'rgb(235, 255, 252) none repeat scroll 0% 0%',
  },
  slideFour: {
    background: 'rgb(234, 250, 255) none repeat scroll 0% 0%',
  },
});

export default hcStyle;
