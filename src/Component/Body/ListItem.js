import { useCallback, useEffect, useState } from "react";
import classes from "./ListItem.module.css";
import { FaCartPlus } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceAction } from "../../Store/cartSlice";

const ListItem = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onAddToCart = ({ id, title, price, image }) => {
    dispatch(cartSliceAction.addToCart({ id, title, price, image }));
  };

  const onRemoveFromCart=({id})=>{
    dispatch(cartSliceAction.removeFromCart(id));

  }

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://e-commerce-fae42-default-rtdb.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch the Data");
      }
      const data = await response.json();
      const arrItems = [];
      data.map((item) => {
        arrItems.push({
          id: item.id,
          image: item.image,
          price: item.price,
          title: item.name,
          description: item.desc,
        });
      });

      setList(arrItems);
      setIsLoading(false);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={classes.itemBox}>
      {isLoading && <p>Loading....</p>}
      {!isLoading &&
        list.map((item) => (
          <div className={classes.itemDiv} key={item.id}>
            <img src={item.image} alt={item.title} className={classes.image} />
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
