import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  const OneServiceRequest = async (id) => {
    return await http.get(`/bff/attendance/group-attendance/${id}`, config).then(response => response.data)
    .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
            logout()
            window.location.reload()
        }
        throw err;
        
    });;
}

export const useFetchOneService = (id) => {
    return useQuery("OneService", () => OneServiceRequest(id));
  };



export const EditServiceRequest = async (body, id) => {
    return await http.put(`/direct/attendance/${id}`, body, config)
}