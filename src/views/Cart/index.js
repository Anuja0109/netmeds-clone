import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import cartStyle from './CartStyle';
import EmptyCartImg from '../../assets/images/emptycart.png';

function Cart() {
  const classes = cartStyle();
  return (
    <Grid container xs={12} md={12} className={classes.cartSection}>
      <Grid container item xs={12} md={12} className={classes.mycartHead}>
        My Cart
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        item
        xs={12}
        md={12}
        className={classes.cartBlock}
      >
        <div className={classes.cartEmpty}>
          <img
            src={EmptyCartImg}
            alt="emptycart-img"
            className={classes.emptyImg}
          />
          <h3>Your Cart is empty!</h3>
          <p>
            You have no items added in the cart.
            <br />
            Explore and add products you like!
          </p>
          <Link to="/" className={classes.cartBtn}>
            ADD PRODUCTS
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}

export default Cart;
