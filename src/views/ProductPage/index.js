import { Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import BreadCrumbs from '../../sharedcomponents/BreadCrumbs';
import VerticalCarousel from '../../sharedcomponents/VerticalCarousel';
import productPageStyle from './ProductPageStyle';

function ProductPage() {
  const classes = productPageStyle();
  return (
    <>
      <BreadCrumbs />
      <Grid container direction="row" className={classes.productPage} width={1}>
        <Grid container item className={classes.productTop} xs={12} md={12}>
          <Grid item xs={12} md={6} className={classes.leftBlock}>
            <Box component="div" className={classes.productMedia} width={1}>
              <VerticalCarousel />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={classes.rightBlock}>
            <Box component="div" className={classes.productDetails} width={1}>
              <h1>Dr.Vaidya&apos;s LIVitup! Capsule 5&apos;s</h1>
              <Link to="/" className={classes.productHeadLink}>
                <span>Ayush</span>
              </Link>
              <Link to="/" className={classes.productHeadLink}>
                <span>Ayurvedic</span>
              </Link>
            </Box>
            <Link to="/" className={classes.ratingLink}>
              <span className={classes.ratingSpan}>5.0</span>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                edit={false}
                size={24}
                activeColor="#73c330"
                value={5}
                classNames={classes.ratingCount}
              />
              <span className={classes.reviewsCounts}>
                9 Ratings & 9 Reviews
              </span>
            </Link>
            <hr className="divider" />
            <Box component="div" className={classes.essentials}>
              <Box component="div" className={classes.priceBox}>
                <span className={classes.finalPrice}>
                  <span className={classes.bestPrice}>Best Price* </span>₹
                  1,279.20
                </span>
                <span className={classes.price}>
                  MRP
                  <strike>₹ 1,599.00 </strike>
                  <span className={classes.off}>GET 20% off</span>
                </span>
                <span className={classes.tax}>(Inclusive of all taxes)</span>
                <span className={classes.returnProduct}>
                  *This product cannot be returned for a refund or exchange.
                </span>
                <span className={classes.drugMenu}>
                  * Mfr:{' '}
                  <Link className={classes.drugMenuLink} to="/">
                    Roche Diabetes Care Gmbh
                  </Link>
                </span>
                <span className={`${classes.drugMenu} ${classes.originText}`}>
                  * Country of Origin: China
                </span>
              </Box>
            </Box>
            <Box component="div" className={classes.boxToCart}>
              <form className={classes.addToCartForm}>
                <input type="hidden" name="sku" id="sku" value="" />
                <input id="qty" type="hidden" name="qty" value="1" />
                <input id="name" type="hidden" name="name" value="" />
                <input id="cat_id" type="hidden" name="cat_id" value="" />
                <input id="cat_name" type="hidden" name="cat_name" value="" />
                <input
                  id="sub_cat_id"
                  type="hidden"
                  name="sub_cat_id"
                  value=""
                />
                <input
                  id="sub_cat_name"
                  type="hidden"
                  name="sub_cat_name"
                  value=""
                />
              </form>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductPage;
