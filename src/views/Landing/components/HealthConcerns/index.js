import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import hcStyle from './HCStyle';
import DCImg from '../../../../assets/images/diabetic-care.png';
import LCImg from '../../../../assets/images/liver-care.png';
import SCImg from '../../../../assets/images/stomach-care.png';
import DAImg from '../../../../assets/images/de-addiction.png';

function HealthConcernSection() {
  const classes = hcStyle();
  return (
    <Grid container item xs={12} md={12} className={classes.hcSection}>
      <h2 className={classes.hch2}>
        EXPLORE BY
        <span>Health Concerns</span>
        <small>Search products according to your health problems</small>
      </h2>
      <OwlCarousel
        className="owl-theme"
        nav
        loop
        dots
        items={4}
        margin={5}
        autoPlay
      >
        <div className={`${classes.slideCommon} ${classes.slideOne}`}>
          <div className={classes.slideSection}>
            <Link to="/" className={classes.slideLink}>
              <span className={classes.titleSpan}>Diabetic Care</span>
              <span className={classes.shopNow}>Shop Now</span>
            </Link>
            <img
              src={DCImg}
              alt="hcSection-banner"
              className={classes.slideImg}
            />
          </div>
        </div>
        <div className={`${classes.slideCommon} ${classes.slideTwo}`}>
          <div className={classes.slideSection}>
            <Link to="/" className={classes.slideLink}>
              <span className={classes.titleSpan}>Liver Care</span>
              <span className={classes.shopNow}>Shop Now</span>
            </Link>
            <img
              src={LCImg}
              alt="hcSection-banner"
              className={classes.slideImg}
            />
          </div>
        </div>
        <div className={`${classes.slideCommon} ${classes.slideThree}`}>
          <div className={classes.slideSection}>
            <Link to="/" className={classes.slideLink}>
              <span className={classes.titleSpan}>Stomach Care</span>
              <span className={classes.shopNow}>Shop Now</span>
            </Link>
            <img
              src={SCImg}
              alt="hcSection-banner"
              className={classes.slideImg}
            />
          </div>
        </div>
        <div className={`${classes.slideCommon} ${classes.slideFour}`}>
          <div className={classes.slideSection}>
            <Link to="/" className={classes.slideLink}>
              <span className={classes.titleSpan}>De-Addiction</span>
              <span className={classes.shopNow}>Shop Now</span>
            </Link>
            <img
              src={DAImg}
              alt="hcSection-banner"
              className={classes.slideImg}
            />
          </div>
        </div>
      </OwlCarousel>
    </Grid>
  );
}

export default HealthConcernSection;
