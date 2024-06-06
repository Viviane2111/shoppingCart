import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addItem: (state, action) => {
         const existingItem = state.items.find(item => item.id === action.payload.id);
         if (existingItem) {
            existingItem.quantity += 1;
         } else {
            state.items.push({ ...action.payload, quantity: 1})
         }
      },
      clearCart: (state, action) => {
         state.items = [];
      },
   },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;