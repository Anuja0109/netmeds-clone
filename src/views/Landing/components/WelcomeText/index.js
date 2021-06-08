import { Grid, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import welcomeTextStyle from './WelcomTextStyle';
import { wellnessProducts } from './data';

function WelcomeText() {
  const classes = welcomeTextStyle();
  return (
    <Grid container item xs={12} md={12} className={classes.landingTextSection}>
      <p className={classes.firstPara}>
        <b>Popular Wellness Products: </b>
        {wellnessProducts.map((item) => (
          <p className={classes.internalP}>
            <Link className={classes.wPLink} to={item.to}>
              {item.name}
            </Link>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
          </p>
        ))}
      </p>
    </Grid>
  );
}

export default WelcomeText;
