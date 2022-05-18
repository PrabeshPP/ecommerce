import classes from "./Body.module.css";

const placeholderText="Search";

function Body(){
    const submitHandler=(event)=>{
        event.preventDefault();
    }
    return(
        <div className={classes.bodyDiv}>
            <form onSubmit={submitHandler} className={classes.form}>
                <input type="text" placeholder={placeholderText}/>
            </form>
        </div>

    )
}

export default Body;