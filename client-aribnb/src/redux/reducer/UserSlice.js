import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/User";

// tao bat dong bo register
export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    // console.log("action ===>", payload);
    //call API de dang ky tai khoan
    const responce = await UserAPI.register(payload);
    //Luu User
    // localStorage.setItem("Users", JSON.stringify(responce.user));
    // Luu access Token
    // localStorage.setItem("TokenRegister", JSON.stringify(responce.accessToken));
    return responce;
  }
);

// tao bat dong bo login
export const login = createAsyncThunk("login/fetchAuth", async (payload) => {
  //call len sever xem cos tai khoan
    const responce = await UserAPI.login(payload);
    responce && localStorage.getItem("users", JSON.stringify(responce.user));
    responce &&
      localStorage.getItem("Token", JSON.stringify(responce.accessToken));
    return responce;
});

const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
    [login.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
  },
});
const { actions, reducer } = userSlice;
export default reducer;
