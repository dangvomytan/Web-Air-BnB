import  ProductSlice  from "./ProductSlice";
import  userSlice  from "./UserSlice";


export const rootReducer = {
     user: userSlice,
     product: ProductSlice
}