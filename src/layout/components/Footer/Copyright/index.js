import { Link } from 'react-router-dom';
import copyrightStyle from './CopyrightStyle';

function Copyright() {
  const classes = copyrightStyle();
  return (
    <small className={classes.root}>
      <div className={classes.copyblock}>
        <div className={`${classes.hPro} ${classes.common}`}>
          <Link to="/" className={classes.txtWhite}>
            Medicine Products
          </Link>
        </div>
        <div className={`${classes.hPro} ${classes.common}`}>
          <Link to="/" className={classes.txtWhite}>
            Health Products
          </Link>
        </div>
        <div className={`${classes.bCheck} ${classes.common}`}>
          <Link to="/" className={classes.txtWhite}>
            Book tests & checkups
          </Link>
        </div>
        <div className={classes.txtWhite}>
          Copyright© 2021 Netmeds Marketplace Ltd.
        </div>
      </div>
    </small>
  );
}

export default Copyright;
