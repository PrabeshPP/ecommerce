import { useParams } from "react-router";
import { useSelector } from "react-redux";
import classes from "./Detail.module.css";
import { BsFillShareFill, BsHeart } from "react-icons/bs";

const Detail = (params) => {
  const products = useSelector((state) => state.products);
  const paramsId = useParams();
  const item = products.items.find(
    (product) => product.id == parseInt(paramsId.productId)
  );

  return (
    <div className={classes.box}>
      {
        item&&<div className={classes.container}>
        <img src={item.image} className={classes.img} />
        <div className={classes.rightBox}>
          <div className={classes.titleBox}>
            <h2>{item.title}</h2>
          </div>
          <div className={classes.descBox}>{item.description}</div>
          <div className={classes.line}></div>
          <div className={classes.price}>
            ${item.price}
            <div className={classes.icons}>
              <BsFillShareFill className={classes.icon} />
              <BsHeart className={classes.icon} />
            </div>
          </div>
          <div className={classes.button}>
            <button className={classes.buy}>Buy Now</button>
              <button className={classes.add}>Add To Cart</button>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Detail;
