import { makeStyles } from '@material-ui/core/styles';

const homeBrandStyle = makeStyles({
  homeBrandSection: {
    margin: '8px 18px',
    padding: '16px 24px',
    borderRadius: '8px',
    position: 'relative',
    overflow: 'visible',
  },
  sectionHeadh2: {
    fontFamily: 'LatoBold',
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
  },
  brandsBlock: {
    margin: '0 -8px',
    padding: '0 0 16px',
    display: 'flex',
    alignItems: 'stretch',
  },
  brandLinkSec: {
    textDecoration: 'none',
  },
  brandDetails: {
    height: '100%',
    margin: '0 8px',
    position: 'relative',
  },
  brandImg: {
    borderRadius: '8px',
    height: '160px',
    zIndex: '-1',
    width: '100%',
  },
  brandContent: {
    background: '#fff',
    borderRadius: '8px',
    padding: '16px 32px',
    fontFamily: 'Lato',
    fontWeight: 700,
    lineHeight: 1.5,
    textAlign: 'center',
    color: '#378f30',
    margin: '-45px 36px 0',
    fontSize: '12px',
    letterSpacing: '1px',
    position: 'relative',
    zIndex: 1000,
  },
  contentImg: {
    display: 'block',
    margin: '0 auto 8px',
  },
  clearFix: {
    height: '0px',
    clear: 'both',
    display: 'flex',
  },
});

export default homeBrandStyle;
