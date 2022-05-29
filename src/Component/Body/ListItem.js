import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./ListItem.module.css";
import { FaCartPlus } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceAction } from "../../Store/cartSlice";

const ListItem = () => {
  const cart = useSelector((state) => state.cart);
  const products=useSelector((state)=>state.products);
  const dispatch = useDispatch();
 

  const onAddToCart = ({ id, title, price, image }) => {
    dispatch(cartSliceAction.addToCart({ id, title, price, image }));
  };

  const onRemoveFromCart=({id})=>{
    dispatch(cartSliceAction.removeFromCart(id));

  }

  
  return (
    <div className={classes.itemBox}>
      
      {products.items.map((item) => (
          <div className={classes.itemDiv} key={item.id}>
          <NavLink to="/:1">{<img src={item.image} alt={item.title} className={classes.image} />}</NavLink>
            <div className={classes.box}>
              <div className={classes.title}>
              {item.title}
              </div>
              <div className={classes.footer}>
                <span>${item.price}</span>
                {cart.items.find((product) => product.id === item.id) ? (
                  <button className={classes.removeFromCart} onClick={()=>{
                    onRemoveFromCart({id:item.id})
                  }}>
                    <BsFillCartCheckFill  />
                   
                  </button>
                ) : (
                  <button
                    className={classes.addtoCart}
                    onClick={() => {
                      onAddToCart({
                        id: item.id,
                        image: item.image,
                        title: item.title,
                        price: item.price,
                      });
                    }}
                  >
                    <FaCartPlus/>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListItem;
