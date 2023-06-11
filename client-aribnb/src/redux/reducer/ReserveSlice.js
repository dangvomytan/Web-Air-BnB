import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReserveAPI } from "../../api/Reserve";

export const addReserve = createAsyncThunk("createReserve", async (payload) => {
  const responce = await ReserveAPI.createReserve(payload);
  return responce;
});

export const reducerAllReserve = createAsyncThunk(
  "Reserve/fetchCallAllReserve",
  async () => {
    const responce = await ReserveAPI.getAllReserve();
    return responce;
  }
);

const ReserveSlice = createSlice({
  name: "reserve",
  initialState: [],
  extraReducers: {
    [addReserve.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [reducerAllReserve.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { actions, reducer } = ReserveSlice;
export default reducer;
