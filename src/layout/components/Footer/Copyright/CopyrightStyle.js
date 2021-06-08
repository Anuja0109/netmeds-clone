import { makeStyles } from '@material-ui/core/styles';
import MedicineIcon from '../../../../assets/images/medicine.svg';
import Wellness from '../../../../assets/images/wellness.svg';
import Diagonstic from '../../../../assets/images/diagnostics.svg';

const copyrightStyle = makeStyles({
  root: {
    background: '#151b39',
    color: '#fff',
    display: 'inline-block',
    fontSize: '11px',
    textAlign: 'left',
    width: '100%',
    borderTop: '1px solid rgba(195,195,195,.5)',
    height: '65px',
  },
  copyblock: {
    boxSizing: 'border-box',
    margin: '0 auto',
    maxWidth: '1030px',
    minWidth: '1030px',
    padding: '20px 10px',
    lineHeight: '24px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  common: {
    backgroundSize: '24px',
    height: '52px',
    lineHeight: '24px',
    paddingLeft: '32px',
  },
  mPro: {
    background: `url(${MedicineIcon}) 0 0 no-repeat`,
  },
  hPro: {
    background: `url(${Wellness}) 0 0 no-repeat`,
  },
  bCheck: {
    background: `url(${Diagonstic}) 0 0 no-repeat`,
  },
  txtWhite: {
    color: '#fff',
    textDecoration: 'none',
    paddingLeft: '12px',
  },
});

export default copyrightStyle;
