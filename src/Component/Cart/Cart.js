import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const loadItem= 
    cart.items.map((item)=>{
    return <div className={classes.itemCard} key={item.id}>
   <img src={item.image} className={classes.img} alt={item.title}/>

   <div className={classes.desc}>
     <div className={classes.descHeader}>
       <span className={classes.title}>{item.title}</span>
       <span>$ {item.totalPrice / item.quantity}</span>
       <span>Total Quantity:{item.quantity}</span>
       <span>Total Price:$ {item.totalPrice}</span>
     </div>
     <div className={classes.footer}>
       <div className={classes.left}>
         <button className={classes.button}>{<BiMinus />}</button>
         <button className={classes.button}>{<BsPlusLg />}</button>
       </div>
     </div>
   </div>
 </div>
    })


  return (
    <div className={classes.bodyDiv}>
      <div className={classes.container}>
        <div className={classes.header}>
          <span className={classes.span1}>Shopping Cart</span>
          <span className={classes.span2}>Deselect All Items</span>
          <div className={classes.hr}></div>
        </div>
        {loadItem}
      </div>
      <div className={classes.checkout}></div>
    </div>
  );
};

export default Cart;
