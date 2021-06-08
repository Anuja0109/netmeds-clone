import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { isEmpty } from 'lodash';
import generalSliderStyle from './GeneralSliderStyle';

function GeneralSlider({ data }) {
  const classes = generalSliderStyle();
  return (
    <Grid conatiner item xs={12} md={12} className={classes.bdsSection}>
      <h2>
        {data.header}
        <Link className={classes.viewAllLink} to={data.linkToViewAll}>
          View All
        </Link>
        <span>{data.title}</span>
        <small>{data.subTitle}</small>
      </h2>
      <Grid item xs>
        <OwlCarousel
          className="owl-theme"
          nav
          dots
          loop
          items={6}
          margin={5}
          autoPlay
        >
          {data.products.map((product) => (
            <Card className={classes.sliderRoot}>
              <CardActionArea>
                <Typography
                  className={classes.imgSpan}
                  variant="subtitle1"
                  component="span"
                >
                  <CardMedia
                    component="img"
                    alt="slider-Media"
                    className={classes.media}
                    image={product.image}
                    title="slider-Media"
                  />
                </Typography>

                <Typography
                  className={
                    !isEmpty(product.discount)
                      ? classes.saveBadge
                      : classes.hideBadge
                  }
                  component="span"
                  variant="subtitle1"
                >
                  {product.discount}
                </Typography>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    className={classes.cardText}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="span"
                      className={classes.cardTitle}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                      className={classes.cardSubtext}
                    >
                      {product.infoText}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                      className={classes.priceBox}
                    >
                      <strike className={classes.strike}>
                        {product.strikePrice}
                      </strike>
                      <span className={classes.finalPrice}>
                        {product.offerPrice}
                      </span>
                    </Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardBtnBlock}>
                <button type="submit" className={classes.addToCardBtn}>
                  ADD TO CART
                </button>
              </CardActions>
            </Card>
          ))}
        </OwlCarousel>
      </Grid>
    </Grid>
  );
}

GeneralSlider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
};

export default GeneralSlider;
