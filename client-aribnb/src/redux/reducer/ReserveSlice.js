import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { ReverseAPI } from "../../api/Reverse";


export const addReserve = createAsyncThunk(
     "createReserve",
     async (payload) =>{
          const responce = await ReverseAPI.createReverse(payload);
          return responce;
     }
);

const ReverseSlice =  createSlice({
     name: "reserve",
     initialState: {},
     extraReducers:{
          [addReserve.fulfilled]: (state, action) =>{
               state =  action.payload;
               return state;
          }
     }
})

const {actions, reducer} = ReverseSlice;

export default reducer;