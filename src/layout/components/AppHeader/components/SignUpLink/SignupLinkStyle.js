import { makeStyles } from '@material-ui/core/styles';
import ProfileIcon from '../../../../../assets/images/profile.svg';

const signupLinkStyle = makeStyles({
  signupBlock: {
    margin: ' 0px',
    maxWidth: '160px',
    marginTop: '-10px',
  },
  logged: {
    boxSizing: 'border-box',
  },
  signupLink: {
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    color: '#ffffff',
    background: `url(${ProfileIcon}) no-repeat left center`,
    backgroundSize: '40px',
    paddingLeft: '56px',
    height: '90px',
    display: 'inline-block',
    textDecoration: 'none',
  },
});

export default signupLinkStyle;
