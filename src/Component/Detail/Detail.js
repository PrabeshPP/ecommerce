import { useParams } from "react-router";
import { useSelector } from "react-redux";
import classes from "./Detail.module.css";

const Detail=(params)=>{
    const cart=useSelector((state)=>state.cart);
    const paramsId=useParams();
    return(
        <div className={classes.box}>
            
        </div>
    )
}

export default Detail;