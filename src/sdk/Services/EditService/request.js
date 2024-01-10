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

export const AddFamilyServiceGroupRequest = async (body) => {
    return await http.post(`/bff/attendance/add-family-to-group-attendance`, body, config)
}

export const RemoveFamilyServiceGroupRequest = async (body) => {
    return await http.delete(`/bff/attendance/remove-family-from-group-attendance`, {params: { attendanceId: 34,
    familyId: 19 }}, config)
}
