import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import secondNavStyle from './SecondNavStyle';
import { linkItems } from './data';

function SecondNav() {
  const classes = secondNavStyle();
  return (
    <Grid container className={classes.secondNav}>
      <nav className={classes.navigation}>
        <ul className={classes.uiMenu}>
          {linkItems.map((item) => (
            <li key={item.name} className={classes.listItem}>
              <Link className={classes.levelTop} to={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Grid>
  );
}

export default SecondNav;
