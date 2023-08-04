import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const OneTypesServicesRequest = async (id) => {
    return await http.get(`/typesServices/${id}`, config);
}

export const useFetchOneTypesServices= (id) => {
    return useQuery("OneTypesServices", () => OneTypesServicesRequest(id));
};


export const EdittypesServicesRequest = async (body, id) => {
    return await http.put(`/typesServices/${id}`, body, config);
}