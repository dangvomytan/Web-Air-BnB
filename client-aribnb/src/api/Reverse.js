import axiosClient from "./AxiosClient";


export class ReverseAPI{
     static createReverse(param){
          const url ="/reserve";
          return axiosClient.post(url,param);
     }
}