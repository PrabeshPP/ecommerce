import classes from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={classes.bodyDiv}>
      <div className={classes.container}>
        <div className={classes.header}>
          <span className={classes.span1}>Shopping Cart</span>
          <span className={classes.span2}>Deselect All Items</span>
          <div className={classes.hr}></div>
        </div>
        <div className={classes.itemCard}>
            <div className={classes.image}>

            </div>
            <div className={classes.desc}>

            </div>
        </div>
      </div>
      <div className={classes.checkout}></div>
    </div>
  );
};

export default Cart;
