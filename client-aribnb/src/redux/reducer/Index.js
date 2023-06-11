import  ProductSlice  from "./ProductSlice";
import  userSlice  from "./UserSlice";
import ReverveSlice from "./ReserveSlice"


export const rootReducer = {
     user: userSlice,
     product: ProductSlice,
     reserve: ReverveSlice,
}