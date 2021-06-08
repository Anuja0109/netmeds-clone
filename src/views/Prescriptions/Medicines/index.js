import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import medicinesStyle from './MedicinesStyle';
import BreadCrumbs from '../../../sharedcomponents/BreadCrumbs';
import { drugListByAlphabates } from '../data';

function Medicines() {
  const classes = medicinesStyle();
  return (
    <Grid container spacing={0} className={classes.root}>
      <BreadCrumbs />
      <Grid container item xs={12} md={12} className={classes.pressTitle}>
        <Box component="div" className={classes.innerContent}>
          <h1>Find Your Prescription Medicines</h1>
          <span>Shop by Drug Category</span>
        </Box>
      </Grid>
      <Grid container item xs={12} md={12} width={1}>
        <Box component="div" width={1} className={classes.listNav}>
          <Box component="div" className={classes.inLetters}>
            <Link to="/prescriptions" className={classes.lettersLink}>
              A
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              B
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              C
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              D
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              E
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              F
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              G
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              H
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              I
            </Link>
            <Link
              to="/prescriptions"
              className={`${classes.lettersLink} ${classes.disabledLink}`}
            >
              J
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              K
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              L
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              M
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              N
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              O
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              P
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              Q
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              R
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              S
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              T
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              U
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              V
            </Link>
            <Link to="/prescriptions" className={classes.lettersLink}>
              W
            </Link>
            <Link
              to="/prescriptions"
              className={`${classes.lettersLink} ${classes.disabledLink}`}
            >
              X
            </Link>
            <Link
              to="/prescriptions"
              className={`${classes.lettersLink} ${classes.disabledLink}`}
            >
              Y
            </Link>
            <Link
              to="/prescriptions"
              className={`${classes.lettersLink} ${classes.disabledLink}`}
            >
              Z
            </Link>
            <Link
              to="/prescriptions"
              className={`${classes.lettersLink} ${classes.selected}`}
            >
              ALL
            </Link>
          </Box>
        </Box>
        <Box component="div" className={classes.drugList} width={1}>
          {drugListByAlphabates.map((item) => (
            <Box component="div" className={classes.drugListCol}>
              <h3 className={classes.drugPrefix}>{item.letter}</h3>
              <ul className={classes.drugPrefixList}>
                {item.list.map((drug) => (
                  <li className={classes.drugListItem}>
                    <Link to="/prescriptions" className={classes.itemLink}>
                      {drug}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Medicines;
