import { useQuery } from "react-query";
import http from "../../../services/axios";
import { GetIdAttendance, getToken, logout } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const ALLServiceRequest = async () => {
  try {
    return await http.get("/bff/get-attendance",{ params: { attendance_unity_fk: GetIdAttendance() ? parseInt(GetIdAttendance()) : undefined } }, config).then(response => response.data)
      .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
          logout();
          window.location.reload()
        }
        throw err;
      });
  } catch (err) {
    console.log(err)
  }
}

export const useFetchAllService = () => {
  return useQuery("AllService", () => ALLServiceRequest());
};

export const DeleteServiceRequest = async (id) => {
  return await http.delete(`/attendance/${id}`, config)
}