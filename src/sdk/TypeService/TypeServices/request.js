import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const AllTypesServicesRequest = async () => {
  return await http.get("/direct/task", config).then(response => response.data)
  .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
          logout()
          window.location.reload()
      }
      throw err;
  });;
}

export const useFetchAllTypesServices = () => {
  return useQuery("AllTypesServices", () => AllTypesServicesRequest());
};

export const DeleteTypesServicesRequest = async (id) => {
  return await http.delete(`/direct/task/${id}`, config);
}