import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import breadcrumbsStyle from './BreadCrumbsStyle';

function BreadCrumbs() {
  const classes = breadcrumbsStyle();
  return (
    <Grid xs className={classes.root}>
      <ul>
        <li>
          <Link to="/" className={classes.breadcrumbsLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/prescriptions" className={classes.breadcrumbsLink}>
            Wellness
          </Link>
        </li>
        <li>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span>Dr.Vaidya's LIVitup! Capsule 5's</span>
        </li>
      </ul>
    </Grid>
  );
}

export default BreadCrumbs;
