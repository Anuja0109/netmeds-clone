/* eslint-disable react/jsx-boolean-value */
import { Grid } from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import ppoStyle from './PPOStyle';
import PPOSliderImgOne from '../../../../assets/images/ppoSlider1.png';
import PPOsliderImgTwo from '../../../../assets/images/ppoSlider2.png';
import PPOSliderImgThree from '../../../../assets/images/ppoSlider3.png';

function PaymentPartnerOffers() {
  const classes = ppoStyle();
  return (
    <Grid container item xs={12} md={12} className={classes.ppoSection}>
      <h2 className={classes.ppoH2}>
        PAYMENT PARTNER OFFERS
        <Link className={classes.ppoH2Link} to="/">
          View All
        </Link>
      </h2>
      <OwlCarousel
        className="owl-carousel owl-theme"
        loop
        dots={true}
        nav={true}
        margin={16}
        items={3}
      >
        <div className={classes.slideSec}>
          <Link to="/" className={classes.secLink}>
            <img
              className={classes.secImg}
              src={PPOSliderImgOne}
              alt="section-img"
            />
            <div className={classes.descriptionSlide}>
              <h2 className={classes.ellipses}>
                Get up to Rs. 200 Simpl Cashback* (FLAT 20%)! ..
              </h2>
              <p className={classes.secPara}>
                From 16th to 30th April 2021, get up to Rs. 200 Simpl Cashback*
                (Flat 20%) on your payment via Simpl..
              </p>
            </div>
          </Link>
        </div>
        <div className={classes.slideSec}>
          <Link to="/" className={classes.secLink}>
            <img
              className={classes.secImg}
              src={PPOsliderImgTwo}
              alt="section-img"
            />
            <div className={classes.descriptionSlide}>
              <h2 className={classes.ellipses}>
                Get up to Rs. 200 Simpl Cashback* (FLAT 20%)! ..
              </h2>
              <p className={classes.secPara}>
                From 16th to 30th April 2021, get up to Rs. 200 Simpl Cashback*
                (Flat 20%) on your payment via Simpl..
              </p>
            </div>
          </Link>
        </div>
        <div className={classes.slideSec}>
          <Link to="/" className={classes.secLink}>
            <img
              className={classes.secImg}
              src={PPOSliderImgThree}
              alt="section-img"
            />
            <div className={classes.descriptionSlide}>
              <h2 className={classes.ellipses}>
                Get up to Rs. 200 Simpl Cashback* (FLAT 20%)! ..
              </h2>
              <p className={classes.secPara}>
                From 16th to 30th April 2021, get up to Rs. 200 Simpl Cashback*
                (Flat 20%) on your payment via Simpl..
              </p>
            </div>
          </Link>
        </div>
      </OwlCarousel>
    </Grid>
  );
}

export default PaymentPartnerOffers;
