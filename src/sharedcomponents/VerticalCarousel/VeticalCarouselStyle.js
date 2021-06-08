import { makeStyles } from '@material-ui/core/styles';

const VerticalCarouselStyle = makeStyles(() => ({
  owlCarousel: {
    transform: 'rotate(90deg)',
    width: '270px',
    marginTop: '73px',
    height: '485px',
    display: 'flex',
    flexDirection: 'column reverse',
    justifyContent: 'flex-start',
    minWidth: '64px',
  },
  item: {
    transform: 'rotate(-90deg)',
  },
  owlNav: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    top: 'calc(50% - 33px)',
  },
  owlPrev: {
    textAlign: 'center',
    color: '#24aeb1',
    fontWeight: 700,
    fontSize: '20px',
    background: 'transparent',
    border: 0,
    '&::before': {
      content: '"\f106"',
    },
  },
  owlNext: {
    textAlign: 'center',
    color: '#24aeb1',
    fontWeight: 700,
    fontSize: '20px',
    background: 'transparent',
    border: 0,
    '&::before': {
      content: '"\f106"',
    },
  },
  navContainer: {
    height: '335px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: '73px',
    minWidth: '64px',
  },
  arrowUpIcon: {
    textAlign: 'center',
    color: '#24aeb1',
    fontWeight: 700,
    fontSize: '20px',
    '&::before': {
      content: '"\f106"',
    },
  },
  verticalSlide: {
    height: '485px !important',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column-reverse',
    textAlign: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    userSelect: 'none',
    touchAction: 'pan-y',
  },
}));

export default VerticalCarouselStyle;
