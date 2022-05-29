import { productAction } from "./productSlice";

export const fetchData=()=>{
    return async(dispatch)=>{
        const fetchItem=async()=>{
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

              return arrItems;
        }
        try{
            const data=await fetchItem();
            dispatch(
                productAction.replaceProductList({
                    items:data||[1,2,3,4,5]
                })
            )
        }catch(err){
            
        }
    }
}