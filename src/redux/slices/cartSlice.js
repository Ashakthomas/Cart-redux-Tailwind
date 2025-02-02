import { createSlice } from "@reduxjs/toolkit";
import cartStore from "../cartStore";

const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        addToCart:(state,actionByComponent)=>{
            const existingProduct = state.find(item=>item.id==actionByComponent.payload.id)
            if(existingProduct)
            {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id) 
                state = [...remainingProducts,existingProduct]
                
            }
            else{
                state.push({...actionByComponent.payload, quantity:1,totalPrice:actionByComponent.payload.price})
            }
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer