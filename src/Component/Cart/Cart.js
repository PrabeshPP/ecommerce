import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import {BsPlusLg} from "react-icons/bs";
import {BiMinus} from "react-icons/bi";
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
                <div className={classes.descHeader}>
                <span className={classes.title}>{cart.items[0].title}</span>
                <span>$ {cart.items[0].totalPrice/cart.items[0].quantity}</span>
                <span>Total Quantity:{cart.items[0].quantity}</span>
                <span>Total Price:$ {cart.items[0].totalPrice}</span>
                </div>
                <div className={classes.footer}>
                    <div className={classes.left}>
                    <button className={classes.button}>{<BiMinus/>}</button>
                    <button className={classes.button}>{<BsPlusLg/>}</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className={classes.checkout}></div>
    </div>
  );
};

export default Cart;
