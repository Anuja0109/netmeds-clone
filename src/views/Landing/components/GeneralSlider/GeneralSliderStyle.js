import { makeStyles } from '@material-ui/core/styles';

const generalSliderStyle = makeStyles({
  bdsSection: {
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
      '& span': {
        fontFamily: 'Lato',
        color: '#151b39',
        fontSize: '20px',
        letterSpacing: '.25px',
        display: 'block',
        padding: '4px 0',
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
  sliderRoot: {
    padding: '12px',
    margin: 0,
    border: 'solid 1px rgba(112,112,112,.38)',
    backgroundColor: '#fff',
    borderRadius: '8px',
  },
  imgSpan: {
    margin: '0 auto',
    height: '150px',
    display: 'block',
    textAlign: 'center',
  },
  media: {
    width: '150px !important',
    height: '150px !important',
    margin: '0 auto',
  },
  saveBadge: {
    background: '#84be52',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '9px',
    fontFamily: 'Lato',
    fontWeight: 700,
    padding: '4px 5px 2px 5px',
    position: 'absolute',
    top: '8px',
    left: '8px',
    lineHeight: '11px',
    display: 'block',
    visibility: 'visible',
  },
  hideBadge: {
    visibility: 'hidden',
    top: '8px',
  },
  cardTitle: {
    fontFamily: 'LatoBold',
    fontWeight: 700,
    fontSize: '14px',
    color: '#151b39',
    letterSpacing: 0,
    display: 'block',
    margin: '4px 0 5px',
    textAlign: 'left',
    height: '42px',
    overflow: 'hidden',
  },
  cardSubText: {
    width: 'auto',
    display: 'block',
    fontFamily: 'Lato',
    fontStyle: 'italic',
    lineHeight: '16px',
    color: '#6f7284',
    maxWidth: '100%',
    overflow: 'hidden',
    height: '18px',
    whiteSpace: 'nowrap',
  },
  priceBox: {
    fontSize: '13px',
    fontFamily: 'Lato',
    color: 'rgba(21,27,57,.4)',
    width: '100%',
    padding: '0 0 6px',
    display: 'inline-table',
  },
  strike: {
    textDecoration: 'line-through',
    paddingRight: '4px',
  },
  finalPrice: {
    color: '#ef4281',
    fontSize: '16px',
    fontFamily: 'Lato',
    fontWeight: 700,
    marginLeft: '4px',
  },
  cardBtnBlock: {
    padding: 0,
  },
  addToCardBtn: {
    background: '#24aeb1 !important',
    width: '100%',
    fontSize: '14px',
    borderRadius: '4px',
    padding: '11px 0 7px',
    border: 0,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Lato !important',
    cursor: 'pointer',
    fontWeight: 700,
  },
});

export default generalSliderStyle;