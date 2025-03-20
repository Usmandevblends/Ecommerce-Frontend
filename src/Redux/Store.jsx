// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productSlice from "./ProductSlice";
import authReducer from "./authSlice"; // Import the authReducer

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        auth: authReducer, // Add the authReducer to the store
    },
});

export default store;