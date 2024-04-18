import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const OneTechnicianRequest = async (id) => {
    return await http.get(`/direct/technician/${id}`, config).then(response => response.data)
    .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
            logout()
            window.location.reload()
        }
        throw err;
    });;
}

export const useFetchOneTechnician = (id) => {
    return useQuery("OneTechnician", () => OneTechnicianRequest(id));
};

export const useFetchOneTechnicianPsico = (id) => {
    return useQuery("OneTechnicianPsico", () => OneTechnicianRequest(id));
};


export const EditTechnicianRequest = async (body, id) => {
    return await http.put(`/direct/technician/${id}`, body, config);
}