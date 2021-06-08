import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel';
import diagnosticStyle from './DiagnosticsStyle';
import SliderImageOne from '../../../../assets/images/netmeds-immunity-care_without-discount.jpg';

function Diagnostics() {
  const classes = diagnosticStyle();
  return (
    <Grid container item xs={12} md={12} className={classes.diagnosticSection}>
      <h2 className={classes.sectionH2}>
        POPULAR
        <span className={classes.secH2Span}>Diagnostic Packages</span>
        <small className={classes.secH2Small}>
          Free home sample collection for all health checkups
        </small>
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
        <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Diagnostic-Media"
              className={classes.media}
              image={SliderImageOne}
              title="Diagnostic-Media"
            />
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
                  component="h2"
                  className={classes.cardTitle}
                >
                  Netmeds immunity
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                  className={classes.cardSubtext}
                >
                  Healthians
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  className={classes.cardPrice}
                >
                  <strike className={classes.strike}>Rs. 5999.00</strike>
                  <span className={classes.finalPrice}>Rs. 1099.00</span>
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Divider className={classes.divider} />
          <CardActions className={classes.cardBtnBlock}>
            <span className={classes.saveOffer}>Save upto 80%</span>
            <Button size="small" className={classes.bookBtn} color="primary">
              Book Now
            </Button>
          </CardActions>
        </Card>
      </OwlCarousel>
    </Grid>
  );
}

export default Diagnostics;
