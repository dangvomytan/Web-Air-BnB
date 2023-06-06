import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductAPI } from "../../api/Product";

export const reducerAllProduct = createAsyncThunk(
     "product/fetchCallAllProduct",
     async() => {
          const responce = await ProductAPI.getAllProduct();
       
          return responce;
     }
);

const ProductSlice =  createSlice({
     name: "product",
     initialState:[],
     extraReducers:{
          [reducerAllProduct.fulfilled] : (state, action)=>{
               state = action.payload;
               return state;
          },
     },
});
export const {actions,reducer} = ProductSlice;
export default reducer;