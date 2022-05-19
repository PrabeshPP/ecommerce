import { useCallback, useEffect ,useState} from "react";
import classes from "./ListItem.module.css";

const ListItem=()=>{
    const[list,setList]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const fetchData=useCallback(async()=>{
        setIsLoading(true);
        try{
            const response=await fetch("https://fakestoreapi.com/products");
            if(!response.ok){
                throw new Error("Could not fetch the Data");
            }
            const data=await response.json();
            const arrItems=[];
           data.map((item)=>{
               arrItems.push({
                   id:item.id,
                   image:item.image,
                   price:item.price,
                   title:item.title,
                   description:item.description,
                   category:item.category
               })
           })

           setList(arrItems);
           setIsLoading(false);
        }catch(err){

        }
    },[]);

    useEffect(()=>{
        fetchData();
    },[fetchData])

    return(
        <div className={classes.itemBox}>
       
        </div>
    )
    

}

export default ListItem;