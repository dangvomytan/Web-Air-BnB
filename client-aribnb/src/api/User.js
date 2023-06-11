import axiosClient from './AxiosClient'

export class UserAPI{
     static register(param){
          const url = "/register";
          return axiosClient.post(url,param);
     }
     static login(param){
          const url="/login";
          return axiosClient.post(url,param);
     }
     static getAllUser(){
          const url="/users"
          return axiosClient.get(url)
     }
     static updateUser(param,id){
          const url=`/users/${id}`
          return axiosClient.patch(url,param)
     }
}