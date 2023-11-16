import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";
const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const OneAttendanceUnityRequest = async (id) => {
    return await http.get("/bff/attendance-unity", { params: { attendance_unity_fk: id } }, config).then(response => response.data)
        .catch(err => {
            if (err.response.status === 401 || err.response.status === 403) {
                // logout()
                // window.location.reload()
            }
            throw err;
        });;
}

export const EditAttendanceUnityRequest = async (data, id) => {
    return await http.put(`/direct/attendance-unity/${id}`, data, config).then(response => response.data)
        .catch(err => {
            if (err.response.status === 401 || err.response.status === 403) {
                // logout()
                // window.location.reload()
            }
            throw err;
        });;
}

export const EditAddressRequest = async (body, id) => {
    return await http.put(`/direct/address/${id}`, body, config)
  }



export const useFetchOneAttendanceUnity = (id) => {
    return useQuery("OneAttendanceUnity", () => OneAttendanceUnityRequest(id));
};