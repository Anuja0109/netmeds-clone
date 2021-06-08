import { Link } from 'react-router-dom';
import menuNavigationStyle from './MenuNavigationStyle';

function MenuNavigation() {
  const classes = menuNavigationStyle();
  return (
    <div className={classes.headerMenu}>
      <div className={classes.exploreMenu}>
        <ul className={classes.menuList}>
          <li className={classes.mPro}>
            <Link className={classes.mProLink} to="/prescriptions">
              Medicine <br />
              <small className={classes.small}>Over 25000 products</small>
            </Link>
            <ul className={classes.mProSubList}>
              <li className={classes.mProSubListItem}>
                <Link className={classes.mProSubListLink} to="/prescriptions">
                  All Medicines
                </Link>
              </li>
              <li className={classes.mProSubListItem}>
                <Link className={classes.mProSubListLink} to="/">
                  Previously ordered products
                </Link>
              </li>
            </ul>
          </li>
          <li className={classes.linkItem}>
            <Link className={classes.hProLink} to="/">
              Wellness <br />
              <small className={classes.small}>Health Products</small>
            </Link>
          </li>
          <li className={classes.linkItem}>
            <Link className={classes.bCheck} to="/">
              Diagnostic <br />
              <small className={classes.small}>Book tests & checkups</small>
            </Link>
          </li>
          <li className={classes.mPro}>
            <Link className={classes.mProLink} to="/">
              Health Corner <br />
              <small className={classes.small}>
                Trending tips from health experts
              </small>
            </Link>
            <ul className={classes.mProSubList}>
              <li className={classes.mProSubListItem}>
                <Link className={classes.bApp} to="/">
                  All Medicines
                </Link>
              </li>
              <li className={classes.mProSubListItem}>
                <Link className={classes.mProSubListLink} to="/">
                  Previously ordered products
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuNavigation;
