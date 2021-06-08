import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid } from '@material-ui/core';

import AppHeaderStyle from './AppHeaderStyle';
import SearchBar from './components/SearchBar';
import UploadButton from './components/UploadButton';
import CartButton from './components/CartButton';
import SignUpLink from './components/SignUpLink';
import Logo from '../../../assets/images/home-logo-netmeds.svg';

function AppHeader() {
  const classes = AppHeaderStyle();

  return (
    <Grid container className={classes.grow}>
      <AppBar position="static" className={classes.noShadow}>
        <Grid container item className={classes.panelWrapper}>
          <div className={classes.panelHeader}>
            <div className={classes.logo}>
              <Link to="/" className={classes.logoLink}>
                <img className={classes.logoImg} src={Logo} alt="app-logo" />
              </Link>
            </div>
            <SearchBar />
            <UploadButton />
            <CartButton />
            <SignUpLink />
          </div>
        </Grid>
      </AppBar>
    </Grid>
  );
}

export default AppHeader;
