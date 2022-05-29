import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items:[]
}

const ProductSlice=createSlice({
    name:"Product Slice",
    initialState:initialState,
    reducers:{
        replaceProductList(state,action){
            state.items=action.payload.items;
        }
    }
})

export default ProductSlice;
export const productAction=ProductSlice.actions;