import { makeStyles } from '@material-ui/core/styles';

const ppoStyle = makeStyles({
  ppoSection: {
    clear: 'both',
    width: '100%',
    maxHeight: '144px',
    margin: '8px 0px',
    overflow: 'hidden',
    position: 'relative',
    padding: '0px 18px 24px 18px',
  },
  ppoH2: {
    fontFamily: 'LatoBold',
    fontSize: '12px',
    margin: 0,
    color: '#6f7284',
    letterSpacing: '1px',
    padding: '16px 24px',
    display: 'inline-flex',
  },
  ppoH2Link: {
    float: 'right',
    fontSize: '12px',
    color: '#6f7284',
    fontFamily: 'Lato',
    letterSpacing: 0,
  },
  slideSec: {
    height: '74px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  secLink: {
    display: 'contents',
    textDecoration: 'none',
    color: '#151b39',
  },
  secImg: {
    height: '36px',
    width: '52px !important',
    marginRight: '14px',
    float: 'left',
    paddingRight: '14px',
    borderRight: '1px solid rgba(21,27,57,0.1)',
  },
  descriptionSlide: {
    float: 'right !important',
    width: '81%',
    lineHeight: 'normal',
    overflow: 'hidden',
  },
  ellipses: {
    margin: '0px 0px 8px',
    fontSize: '12px',
    fontFamily: 'LatoBold',
    color: '#151b39',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '0px',
    letterSpacing: 0,
  },
  secPara: {
    fontSize: '11px',
    color: '#6F7284',
    margin: '0px',
    wordWrap: 'break-word',
    wordBreak: 'break-all',
  },
});

export default ppoStyle;
