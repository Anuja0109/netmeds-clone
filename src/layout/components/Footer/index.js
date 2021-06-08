import React from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import footerStyle from './FooterStyle';
import Logo from '../../../assets/images/home-logo-netmeds.svg';
import GooglePlayIcon from '../../../assets/images/gplay.png';
import appPlayIcon from '../../../assets/images/app_store.svg';
import {
  companyCol,
  shoppingCol,
  categoriesCol,
  social,
  newsletterText,
} from './data';
import Copyright from './Copyright';

function Footer() {
  const classes = footerStyle();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid container item xs={12} md={12} className={classes.footerTop}>
          <Grid item xs className={classes.footerLogo}>
            <img src={Logo} alt="footer-logo" className={classes.logoImage} />
          </Grid>
          <Grid item xs className={classes.footerText}>
            Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha &
            Company – one of India’s most trusted pharmacies, with over 100
            years’ experience in dispensing quality medicines.
          </Grid>
        </Grid>
        <Grid container item className={classes.footerContainer}>
          <Grid item xs>
            <List
              component="nav"
              aria-label="footer-links-column-one"
              className={classes.footerLists}
              subheader={
                <ListSubheader
                  component="div"
                  id="footer-links-column-one-subheader"
                  className={classes.listSubheader}
                >
                  COMPANY
                </ListSubheader>
              }
            >
              {companyCol.map((item) => (
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={classes.txtWhite}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs>
            <List
              component="nav"
              aria-label="footer-links-column-shopping"
              className={classes.footerLists}
              subheader={
                <ListSubheader
                  component="div"
                  id="footer-links-column-shopping-subheader"
                  className={classes.listSubheader}
                >
                  SHOPING
                </ListSubheader>
              }
            >
              {shoppingCol.map((item) => (
                <ListItem className={classes.listItem}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs>
            <List
              component="nav"
              aria-label="footer-links-column-categories"
              className={classes.footerLists}
              subheader={
                <ListSubheader
                  component="div"
                  id="footer-links-column-categories-subheader"
                  className={classes.listSubheader}
                >
                  CATEGORIES
                </ListSubheader>
              }
            >
              {categoriesCol.map((item) => (
                <ListItem className={classes.listItem}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs>
            <List
              component="nav"
              aria-label="footer-links-column-social"
              className={classes.footerLists}
              subheader={
                <ListSubheader
                  component="div"
                  id="footer-links-column-social-subheader"
                  className={classes.listSubheader}
                >
                  SOCIAL
                </ListSubheader>
              }
            >
              {social.map((item) => (
                <ListItem className={classes.listItem}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs className={classes.subscribe}>
            <h2 className={classes.subscribeHeading}>
              Subscribe to our Newsletter
            </h2>
            {newsletterText}
            <form className={classes.subscribeForm}>
              <div className={classes.subscribeControl}>
                <input
                  type="email"
                  className={classes.subscribeInput}
                  placeholder="Enter your email here"
                />
              </div>
              <button className={classes.goBtn} type="submit">
                Go
              </button>
            </form>
            <div className={classes.playstoreDiv}>
              <Link className={classes.storeIcon1} to="/">
                <img
                  src={GooglePlayIcon}
                  alt="gPlay-icon"
                  className={classes.storeIconImg}
                />
              </Link>
              <Link className={classes.storeIcon2} to="/">
                <img
                  src={appPlayIcon}
                  alt="appPlay-icon"
                  className={classes.storeIconImg}
                />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Copyright />
    </>
  );
}

export default Footer;
