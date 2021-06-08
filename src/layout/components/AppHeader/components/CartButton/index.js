import { Link } from 'react-router-dom';
import cartButtonStyle from './CardButtonStyle';
import { CART } from '../../../../../Routes/RouteEndpoints';

function CartButton() {
  const classes = cartButtonStyle();
  return (
    <div className={classes.miniCart}>
      <Link className={classes.miniCartLink} to={CART}>
        <div className={classes.linkText}>
          <span className={classes.cardCounter}>0</span>
        </div>
      </Link>
    </div>
  );
}

export default CartButton;
