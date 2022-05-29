import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import ProductSlice from "./productSlice";

const store=configureStore({
    reducer:{
        cart:CartSlice.reducer,
        products:ProductSlice.reducer
    }
})

export default store;