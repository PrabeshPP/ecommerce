import classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { cartSliceAction } from "../../Store/cartSlice";
import {GiShoppingCart} from "react-icons/gi";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onAddToCart = ({ id, title, price, image }) => {
    dispatch(cartSliceAction.addToCart({ id, title, price, image }));
  };

  const removeFromCart = (id) => {
    dispatch(cartSliceAction.removeFromCart(id));
  };

  const loadItem = cart.items.map((item) => {
    return (
      <div className={classes.itemCard} key={item.id}>
        <img src={item.image} className={classes.img} alt={item.title} />

        <div className={classes.desc}>
          <div className={classes.descHeader}>
            <span className={classes.title}>{item.title}</span>
            <span>$ {item.totalPrice / item.quantity}</span>
            <span>Total Quantity:{item.quantity}</span>
            <span>Total Price:$ {item.totalPrice}</span>
          </div>
          <div className={classes.footer}>
            <div className={classes.left}>
              <button
                className={classes.button}
                onClick={() => {
                  removeFromCart(item.id);
                }}
              >
                {<BiMinus />}
              </button>
              <button
                className={classes.button}
                onClick={() => {
                  onAddToCart({
                    id: item.id,
                    image: item.image,
                    title: item.title,
                    price: item.totalPrice / item.quantity,
                  });
                }}
              >
                {<BsPlusLg />}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });


  const itemsCart=
     <div className={classes.bodyDiv}>
      <div className={classes.container}>
        <div className={classes.header}>
          <span className={classes.span1}>Shopping Cart</span>
          <span className={classes.span2}>Deselect All Items</span>
          <div className={classes.hr}></div>
        </div>
        {loadItem}
      </div>
      <div className={classes.checkout}>
        <div className={classes.freeShip}>
          <div className={classes.circleTick}>
            <TiTick />
          </div>
          <p>You address qualifies for FREE Shippig.</p>
        </div>
        <div className={classes.details}>
          <p>
            Choose this option at checkout.
            <span className={classes.span}>See details</span>
          </p>
        </div>
        <div className={classes.subtotal}>
          <span className={classes.span1}>
            SubTotal({cart.totalQuantity} items):
            <sup className={classes.sup}>$</sup>
            <span className={classes.span2}>{cart.subTotal}</span>
          </span>
        </div>
        <button className={classes.button}>Proceed To Checkout</button>
      </div>
    </div>


const noItem=<div className={classes.noItem}>
  <GiShoppingCart className={classes.iconDiv}/>
  <span className={classes.span11}>It looks like you have not added anything to cart.</span>
</div>
 
  
  console.log(cart.items.length)
  return (
    cart.items.length===0?noItem:itemsCart
  );
};

export default Cart;
