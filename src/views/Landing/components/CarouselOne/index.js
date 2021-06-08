/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
// import OwlCarousel from 'react-owl-carousel';
import carouselOneStyle from './CarouselOneStyle';
import Image1 from '../../../../assets/images/1616071016_Home_Banner_19th_mar_d.jpg';
import Image2 from '../../../../assets/images/1619533969_Homevbbbbmkl.jpg';

function CarouselOne() {
  const classes = carouselOneStyle();

  return (
    <Grid
      container
      item
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
      className={classes.bannerContainer}
    >
      <Grid container item xs={12} md={12}>
        <Carousel
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              backgroundColor: 'transparent',
              borderRadius: 0,
            },
          }}
          navButtonsWrapperProps={{
            style: {
              background: 'transparent',
              color: 'black',
            },
          }}
          animation="slide"
          // eslint-disable-next-line react/jsx-boolean-value
          navButtonsAlwaysVisible={true}
          indicators={false}
        >
          <Paper>
            <div className="item">
              <img
                className={classes.itemImage}
                src={Image1}
                alt="banner-img"
              />
            </div>
          </Paper>
          <Paper>
            <div className="item">
              <img
                className={classes.itemImage}
                src={Image2}
                alt="banner-img"
              />
            </div>
          </Paper>
        </Carousel>
      </Grid>
    </Grid>
  );
}

export default CarouselOne;
