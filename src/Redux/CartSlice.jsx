import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item.id === newItem.id);
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price;
            } else { 
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    totalPrice: newItem.price,  
                    quantity: 1,
                    image: newItem.image
                });
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        }
    },
});

export const {addTocart} = cartSlice.actions;
export default cartSlice.reducer;
