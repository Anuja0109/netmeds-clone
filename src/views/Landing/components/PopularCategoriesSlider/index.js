import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import pcSliderStyle from './PCSStyle';
import { categoriesData } from './data';

function PopularCategoriesSlider() {
  const classes = pcSliderStyle();
  return (
    <Grid container item xs={12} md={12} className={classes.pcSection}>
      <h2>
        EXPLORE
        <Link className={classes.viewAllLink} to="/">
          View All
        </Link>
        <span>Popular Categories</span>
        <small>Getbest deals on wellness products</small>
      </h2>
      <Grid item xs={12} md={12}>
        <OwlCarousel
          className="owl-theme"
          nav
          dots
          loop
          items={6}
          margin={5}
          autoPlay
        >
          {categoriesData.map((cat) => (
            <div className={classes.sliderItem} key={cat.name}>
              <Link className={classes.itemLink} to="/">
                <span className={classes.imgSpan}>
                  <img
                    alt="slider-Media"
                    src={cat.image}
                    className={classes.catImg}
                  />
                </span>
                <span className={classes.ellipses}>{cat.name}</span>
              </Link>
            </div>
          ))}
        </OwlCarousel>
      </Grid>
    </Grid>
  );
}

export default PopularCategoriesSlider;
