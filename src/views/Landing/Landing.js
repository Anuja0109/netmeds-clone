import React from 'react';
import { Grid } from '@material-ui/core';
import {
  CarouselOne,
  WelcomeText,
  TrendingProductsSlider,
  PaymentPartnerOffers,
  Diagnostics,
  HomeBrands,
  GeneralSlider,
  PopularCategoriesSlider,
  HealthConcernSection,
  NetmedsFirst,
} from './components';
import Message from '../../sharedcomponents/Message';
import landingStyle from './LandingStyle';
import { bestDeals, covidEssentials } from './data';

function Landing() {
  const classes = landingStyle();
  return (
    <Grid container className={classes.root}>
      <Message />
      <CarouselOne />
      <TrendingProductsSlider />
      <PaymentPartnerOffers />
      <Diagnostics />
      <HomeBrands />
      <GeneralSlider data={bestDeals} />
      <PopularCategoriesSlider />
      <GeneralSlider data={covidEssentials} />
      <HealthConcernSection />
      <NetmedsFirst />
      <WelcomeText />
    </Grid>
  );
}

export default Landing;
