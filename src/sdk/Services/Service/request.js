import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const ALLServiceRequest = async () => {
  try {
    return await http.get("/service", config).then(response => response.data)
      .catch(err => {
        console.log(err)
        if (err.response.status === 401 || err.response.status === 403) {
          logout()
          window.location.reload()
        }
        throw err;
      });;
  } catch (err) {
    console.log(err)
  }
}

export const useFetchAllService = () => {
  return useQuery("AllService", () => ALLServiceRequest());
};

export const DeleteServiceRequest = async (id) => {
  return await http.delete(`/service/${id}`, config)
}