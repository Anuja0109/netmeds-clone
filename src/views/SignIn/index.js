import { Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import signinStyle from './SignInStyle';
import SigninBanner from '../../assets/images/sign-in-banner-new.png';

function SignIn() {
  const classes = signinStyle();
  return (
    <Grid container className={classes.root}>
      <Grid container item xs={12} md={12} className={classes.customLogin}>
        <Grid item xs={12} md={12} className={classes.innerSec}>
          <Box
            component={Grid}
            md={6}
            className={classes.leftCol}
            display={{ xs: 'none', sm: 'block' }}
          >
            <div className={classes.imgSec}>
              <img
                src={SigninBanner}
                alt="signin-img"
                className={classes.signinImg}
              />
            </div>
          </Box>
          <Grid item xs={12} md={6} className={classes.rightCol}>
            <div className={classes.rightColInner}>
              <h2 className={classes.heading}>Sign In / Sign Up</h2>
              <div className={classes.innerCol}>
                <p className={classes.innerP}>
                  Sign up or Sign in to access your orders, special offers,
                  health tips and more!
                </p>
                <form className={classes.signinForm}>
                  <div className={`${classes.phoneInput} form-group`}>
                    <span>+91</span>
                    <input
                      type="tel"
                      placeholder="Enter your mobile no"
                      maxLength="10"
                      minLength="10"
                      autoComplete="new-mobile"
                      name="mobile_no"
                      className="form-control"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="mobile_no">PHONE NUMBER</label>
                  </div>
                  <div className={classes.formCheck}>
                    <button type="submit" className={classes.otpBtn}>
                      USE OTP
                    </button>
                    <div className={classes.divideLine}>
                      <span>OR</span>
                    </div>
                    <button type="submit" className={classes.passwordBtn}>
                      USE PASSWORD
                    </button>
                  </div>
                </form>
              </div>
              <div className={classes.socialMain}>
                <Grid xs={12} md={6}>
                  <Link to="/" className={classes.googleBtn}>
                    <span />
                    GOOGLE
                  </Link>
                </Grid>
                <Grid xs={12} md={6} className={classes.fbBtnBlock}>
                  <Link to="/" className={classes.fbBtn}>
                    <span />
                    FACEBOOK
                  </Link>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid xs={12} md={12} className={classes.termsConditionBlock}>
          <p>
            {' '}
            By continuing you agree to our
            <Link to="/" className={classes.termsLink}>
              Terms of service
            </Link>
            <br />
            and{' '}
            <Link to="/" className={classes.termsLink}>
              Privacy & Legal Policy.
            </Link>
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SignIn;
