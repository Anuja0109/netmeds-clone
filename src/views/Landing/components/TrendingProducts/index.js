/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Grid } from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel';
import trendingProductsStyle from './TrendingSliderStyle';
import trendingPImgOne from '../../../../assets/images/tPro1.jpg';
import trendingPImgTwo from '../../../../assets/images/tPro2.jpg';
import trendingPImgThree from '../../../../assets/images/tPro3.jpg';

function TrendingProductsSlider() {
  const classes = trendingProductsStyle();
  return (
    <Grid container item xs={12} md={12} className={classes.tProSection}>
      <h2>
        <span />
        <small />
      </h2>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={5}
        items={3}
        nav
        autoPlay={true}
        autoPlaySpeed={5000}
        autoPlayTimeout={5000}
        autoplayHoverPause={true}
      >
        <div className="item">
          <img src={trendingPImgOne} alt="tproduct-one" />
        </div>
        <div className="item">
          <img src={trendingPImgTwo} alt="tproduct-one" />
        </div>
        <div className="item">
          <img src={trendingPImgThree} alt="tproduct-one" />
        </div>
        <div className="item">
          <img src={trendingPImgOne} alt="tproduct-one" />
        </div>
        <div className="item">
          <img src={trendingPImgTwo} alt="tproduct-one" />
        </div>
        <div className="item">
          <img src={trendingPImgThree} alt="tproduct-one" />
        </div>
        <div className="item">
          <img src={trendingPImgOne} alt="tproduct-one" />
        </div>
        <div className="item">
          <img src={trendingPImgTwo} alt="tproduct-one" />
        </div>
        <div className="item">
          <img src={trendingPImgThree} alt="tproduct-one" />
        </div>
      </OwlCarousel>
    </Grid>
  );
}

export default TrendingProductsSlider;
