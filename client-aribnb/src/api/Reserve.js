import axiosClient from "./AxiosClient";

export class ReserveAPI {
  static createReserve(param) {
    const url = "/reserve";
    return axiosClient.post(url, param);
  }
  
  static getAllReserve() {
    const url = "/reserve";
    return axiosClient.get(url);
  }
}
