import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // vanilla redux(older redux) =>DONT MUTATE THE STATE and returning was mendatory

      // const newState =[...state]
      // newState.state.items.push(action.payload)
      // return newState

      //mutating the state here
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
