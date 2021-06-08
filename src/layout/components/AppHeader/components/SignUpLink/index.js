import { Link } from 'react-router-dom';
import signupLinkStyle from './SignupLinkStyle';
import { SIGNIN } from '../../../../../Routes/RouteEndpoints';

function SignupLink() {
  const classes = signupLinkStyle();
  return (
    <div className={classes.signupBlock}>
      <div className={classes.logged}>
        <Link className={classes.signupLink} to={SIGNIN}>
          Sign in / Sign up
        </Link>
      </div>
    </div>
  );
}

export default SignupLink;
