import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state directly
          state.items.push(action.payload)
          //state=[] ----- make changes in local not in global state
          console.log(state);
          console.log(current.state);
          console.log(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop()
          },
        clearCart:(state)=>{
            state.items.length=0;
            //state.items.length=0 or return empty object      return {items:[]}

            //Redux toolkit sayas -----Either Mutate the existing state or return a new state 

        },
    
}});
export const {addItem,removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;