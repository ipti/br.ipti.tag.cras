import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

const AllTechnicianRequest = async () => {
    return await http.get("/technician", config);
}

export const useFetchAllTechnician = () => {
    return useQuery("AllTechnician", () => AllTechnicianRequest());
  };

  export const DeleteTechnicianRequest = async (id) => {
    return await http.delete(`/technician/${id}`, config);
}