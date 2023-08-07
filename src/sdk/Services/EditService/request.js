import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  const OneServiceRequest = async (id) => {
    return await http.get(`/service/${id}`, config);
}

export const useFetchOneService = (id) => {
    return useQuery("OneService", () => OneServiceRequest(id));
  };



export const EditServiceRequest = async (body, id) => {
    return await http.put(`/service/${id}`, body, config)
}