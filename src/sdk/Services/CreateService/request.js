import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

export const CreateServiceRequest = async (body) => {
    return await http.post("/attendance", body, config)
}

const AllUserIdentifyRequest = async () => {
  return await http.get("/user-identify", config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

export const useFetchAllUserIdentifyAttendance = () => {
  return useQuery("AllUserIdentifyAttendance", () => AllUserIdentifyRequest());
};
