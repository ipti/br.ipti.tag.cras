import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const OneTechnicianRequest = async (id) => {
    return await http.get(`/technician/${id}`, config).then(response => response.data)
    .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
            logout()
            window.location.reload()
        }
        alert(err.message)
        throw err;
    });;
}

export const useFetchOneTechnician = (id) => {
    return useQuery("OneTechnician", () => OneTechnicianRequest(id));
};


export const EditTechnicianRequest = async (body, id) => {
    return await http.put(`/technician/${id}`, body, config);
}