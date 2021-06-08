import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import AppHeader from '../components/AppHeader';
import MenuNavigation from '../components/MenuNavigation';
import Footer from '../components/Footer';
import mainLayoutStyle from './MainLayoutStyle';
import SecondNav from '../components/SecondNav';

const MainLayout = ({ children }) => {
  const classes = mainLayoutStyle();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <AppHeader />
      <MenuNavigation />
      <SecondNav />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
