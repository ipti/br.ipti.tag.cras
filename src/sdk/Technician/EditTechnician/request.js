import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const OneTechnicianRequest = async (id) => {
    return await http.get(`/technician/${id}`, config);
}

export const useFetchOneTechnician = (id) => {
    return useQuery("OneTechnician", () => OneTechnicianRequest(id));
};


export const EditTechnicianRequest = async (body, id) => {
    return await http.put(`/technician/${id}`, body, config);
}