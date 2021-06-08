import { makeStyles } from '@material-ui/core/styles';

const pcSliderStyle = makeStyles({
  pcSection: {
    margin: '8px 18px',
    padding: '16px 24px',
    borderRadius: '8px',
    background: '#fff',
    position: 'relative',
    overflow: 'visible',
    '& h2': {
      fontFamily: 'Lato',
      fontSize: '12px',
      margin: 0,
      color: '#6f7284',
      letterSpacing: '1px',
      padding: '0 0 16px',
      fontWeight: 700,
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
  },
  viewAllLink: {
    textDecoration: 'none',
    float: 'right',
    fontSize: '12px',
    color: '#ad1047',
    fontFamily: 'Lato',
    letterSpacing: 0,
  },
  sliderItem: {
    textAlign: 'center',
    padding: '12px',
  },
  imgSpan: {
    margin: '0 auto',
  },
  catImg: {
    width: '150px',
    height: '150px',
    margin: '0 auto',
    border: 'solid 1px rgba(112,112,112,.38)',
    borderRadius: '8px',
  },
  itemLink: {
    textDecoration: 'none',
  },
  ellipses: {
    fontFamily: 'Lato',
    fontWeight: 700,
    fontSize: '14px',
    color: '#151b39',
    letterSpacing: 0,
    display: 'block',
    margin: '4px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
  },
});

export default pcSliderStyle;
