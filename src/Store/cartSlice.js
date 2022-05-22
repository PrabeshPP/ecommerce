import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    totalQuantity:0,
    changed:false
}

const CartSlice=createSlice(
    {
        name:"Cart Slice",
        initialState:initialState,
        reducers:{

            addToCart(state,action){
                const newItem=action.payload;
                //Find method will return undefined if item doesnot exit || it will return the first object or element we are searching
                const itemExist=state.items.find((item)=>item.id==newItem.id);
                state.totalQuantity++;
                state.changed=true;
                if(!itemExist){
                    state.items.push({
                        id:newItem.id,
                        image:newItem.image,
                        totalPrice:newItem.price,
                        title:newItem.title,
                        quantity:1
                    });
                }else{
                    itemExist.quantity++;
                    itemExist.totalPrice+=newItem.price;
                }

            },

            removeFromCart(state,action){

            }
        }
    }
)

export default CartSlice;
export const cartSliceAction=CartSlice.actions;