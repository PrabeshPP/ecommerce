import { useParams } from "react-router";
import { useSelector } from "react-redux";
import classes from "./Detail.module.css";

const Detail=(params)=>{
    const products=useSelector((state)=>state.products);
    const paramsId=useParams();
    const item=products.items.find((product)=>product.id==parseInt(paramsId.productId));
   
    return(
        <div className={classes.box}>
           <div className={classes.container}>
                <img src={item.image} className={classes.img}/>
                <div className={classes.rightBox}>
                    <h3>{item.title}</h3>
                </div>
           </div>
        </div>
    )
}

export default Detail;