

import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};



const AllAttendanceUnityRequest = async () => {
  return await http.get("/attendance-unity", config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        // logout()
        // window.location.reload()
      }
      
      throw err;
    });;
}

export const DeleteAttendanceRequest = async (id) => {
  return await http.delete(`/attendance-unity/${id}`, config);
}

export const useFetchAllAttendanceUnity = () => {
  return useQuery("AllAttendanceUnity", () => AllAttendanceUnityRequest());
};
