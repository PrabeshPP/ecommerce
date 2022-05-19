import classes from "./Body.module.css";
import {FiSearch} from "react-icons/fi";
import ListItem from "./ListItem";
const placeholderText="Search";

function Body(){
    const submitHandler=(event)=>{
        event.preventDefault();
    }
    return(
        <div className={classes.bodyDiv}>
            <form onSubmit={submitHandler} className={classes.form}>
                <input type="text" placeholder={placeholderText}/>
                <div className={classes.icon}>
                <FiSearch/>
                </div>
            </form>
            <ListItem/>
        </div>

    )
}

export default Body;