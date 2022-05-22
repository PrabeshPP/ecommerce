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
            <img src={cart.items[0].image} className={classes.img}/>

           
            <div className={classes.desc}>
                <span>{cart.items[0].title}</span>
                <span>$ {cart.items[0].totalPrice}</span>
            </div>
        </div>
      </div>
      <div className={classes.checkout}></div>
    </div>
  );
};

export default Cart;
