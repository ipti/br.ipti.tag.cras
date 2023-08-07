import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const ALLServiceRequest = async () => {
  return await http.get("/service", config);
}

export const useFetchAllService = () => {
  return useQuery("AllService", () => ALLServiceRequest());
};

export const DeleteServiceRequest = async (id) => {
  return await http.delete(`/service/${id}`, config)
}