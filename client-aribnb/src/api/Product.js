import axiosClient from "./AxiosClient";

export class ProductAPI{
     static getAllProduct(){
          const url ="/products";
          return axiosClient.get(url);
     }
}