import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import nfStyle from './NFStyle';
import { netmedsFirstData } from './data';

function NetmedsFirst() {
  const classes = nfStyle();
  return (
    <Grid container item xs={12} md={12} className={classes.nfSection}>
      <Grid item xs={12} md={6} className={classes.leftBlock}>
        <h2>GET MOST FROM</h2>
        <h2 className={classes.sectionH2}>
          <span className={classes.secH2Span}>Netmeds First</span>
          <small className={classes.secH2Small}>
            Get special discounts and offers on Netmeds services.
          </small>
        </h2>
        <ul className={classes.memberOffers}>
          {netmedsFirstData.map((data) => (
            <li key={data.name} className={classes.listItem}>
              <img
                src={data.img}
                alt="offer-img"
                className={classes.offerImg}
              />
              <h5>{data.name}</h5>
              <p>{data.subText}</p>
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12} md={6} className={classes.rightBlock}>
        <div className={classes.saveMore}>
          <span className={classes.primeIcon} />
          <h2 className={classes.saveMoreh2}>
            Save more with Netmeds First membership
          </h2>
          <ul className={classes.txtUl}>
            <li className={classes.txtLi}>
              Get special discounts and offers on Netmeds services.
            </li>
            <li>Get 2.5% NMS Cash on all orders.</li>
          </ul>
          <div className={classes.fMsg}>Starting at Rs.299</div>
          <Link className={classes.explorePlans} to="/">
            EXPLORE PLANS
          </Link>
          <span className={classes.tcSpan}>*T&C apply.</span>
        </div>
      </Grid>
    </Grid>
  );
}

export default NetmedsFirst;
