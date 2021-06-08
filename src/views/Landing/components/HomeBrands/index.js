import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import homeBrandStyle from './HomeBrandStyle';
import { brandsData } from './data';

function HomeBrands() {
  const classes = homeBrandStyle();
  return (
    <Grid container item xs={12} md={12} className={classes.homeBrandSection}>
      <h2 className={classes.sectionHeadh2}>
        EXPLORE
        <span>Top Brands</span>
      </h2>
      <Grid item xs={12} md={12} className={classes.brandsBlock}>
        {brandsData.map((brand) => (
          <Grid item xs={12} md={3} key={brand.name}>
            <Link className={classes.brandLinkSec} to="/">
              <div className={classes.brandDetails}>
                <img
                  className={classes.brandImg}
                  src={brand.image}
                  alt="brand-img"
                />
                <div className={classes.brandContent}>
                  <img
                    className={classes.contentImg}
                    src={brand.baseImage}
                    alt="brand-content-img"
                  />
                  <div className={classes.clearFix} />
                  {brand.offerMsg}
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={12} className={classes.brandsBlock}>
        {brandsData.map((brand) => (
          <Grid item xs={12} md={3} key={brand.name}>
            <Link className={classes.brandLinkSec} to="/">
              <div className={classes.brandDetails}>
                <img
                  className={classes.brandImg}
                  src={brand.image}
                  alt="brand-img"
                />
                <div className={classes.brandContent}>
                  <img
                    className={classes.contentImg}
                    src={brand.baseImage}
                    alt="brand-content-img"
                  />
                  <div className={classes.clearFix} />
                  {brand.offerMsg}
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default HomeBrands;
