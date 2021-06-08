import { makeStyles } from '@material-ui/core/styles';

const diagnosticStyle = makeStyles({
  diagnosticSection: {
    margin: '8px 18px',
    padding: '16px 24px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'visible',
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
  cardRoot: {
    minHeight: '1px',
    position: 'relative',
    width: '100%',
  },
  media: {
    borderRadius: '8px',
    height: '216px',
    objectFit: 'contain',
    width: '100%',
  },
  cardText: {
    float: 'left',
    width: '65%',
    padding: '16px 0 0 16px',
  },
  cardTitle: {
    height: '20px',
    fontSize: '16px',
    lineHeight: 'normal',
    letterSpacing: '.15px',
    color: '#151b39',
    display: 'block',
    padding: 0,
    margin: '0 0 8px',
    overflow: 'hidden',
  },
  cardSubtext: {
    height: '20px',
    fontSize: '16px',
    lineHeight: 'normal',
    letterSpacing: '.15px',
    color: '#151b39',
    display: 'block',
    padding: 0,
    margin: '0 0 8px',
    overflow: 'hidden',
  },
  cardPrice: {
    float: 'right',
    width: '34%',
    textAlign: 'right',
    marginTop: '-55px',
    marginRight: '-75px',
  },
  strike: {
    fontSize: '12px',
    color: 'rgba(21,27,57,.4)',
    display: 'block',
    height: '20px',
  },
  finalPrice: {
    color: '#ef4281',
    display: 'block',
  },
  cardBtnBlock: {
    justifyContent: 'space-between',
    margin: '0 5px',
  },
  saveOffer: {
    fontSize: '12px',
    letterSpacing: '1px',
    color: '#378f30',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  divider: {
    backgroundColor: 'rgba(21,27,57,.4)',
  },
  bookBtn: {
    height: '16px',
    fontSize: '12px',
    letterSpacing: '1px',
    color: '#24aeb1',
    fontWeight: 700,
  },
});

export default diagnosticStyle;
