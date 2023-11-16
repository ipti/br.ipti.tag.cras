import { useQuery } from "react-query";
import http from "../../../services/axios";
import { GetIdAttendance, getToken, logout } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const AllTechnicianRequest = async () => {
  return await http.get("/direct/technician",{
    params: {
      attendance_unity_fk: GetIdAttendance() ? parseInt(GetIdAttendance()) : undefined
    }
  }, config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        logout()
        window.location.reload()
      }
      throw err;
    });;
}

export const useFetchAllTechnician = () => {
  return useQuery("AllTechnician", () => AllTechnicianRequest());
};

export const DeleteTechnicianRequest = async (id) => {
  return await http.delete(`/direct/technician/${id}`, config);
}