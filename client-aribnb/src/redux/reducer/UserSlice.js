import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/User";

// tao bat dong bo register
export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    const responce = await UserAPI.register(payload);
    return responce;
  }
);

// tao bat dong bo login
export const login = createAsyncThunk("login/fetchAuth", async (payload) => {
  //call len sever xem cos tai khoan
    const responce = await UserAPI.login(payload);
    responce && localStorage.setItem("Users", JSON.stringify(responce.user));
    responce && localStorage.setItem("AccessToken", JSON.stringify(responce.accessToken));
    return responce;
});

export const getDataUser =  createAsyncThunk("getAllUser", async () =>{
  const responce = await UserAPI.getAllUser();
  console.log(33,responce);
  return responce;

})

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers:{
    logout:(state)=>{
      localStorage.removeItem("Users");
      localStorage.removeItem("AccessToken");
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
    [login.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
    [getDataUser.fulfilled]:(state, action) =>{
      state = action.payload;
      return state;
    }
  },
});
const { actions, reducer } = userSlice;

export const { logout } = actions;

export default reducer;

