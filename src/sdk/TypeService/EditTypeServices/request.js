import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const OneTypesServicesRequest = async (id) => {
    return await http.get(`/direct/task/${id}`, config).then(response => response.data)
    .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
            logout()
            window.location.reload()
        }
        throw err;
    });;
}

export const useFetchOneTypesServices= (id) => {
    return useQuery("OneTypesServices", () => OneTypesServicesRequest(id));
};


export const EdittypesServicesRequest = async (body, id) => {
    return await http.put(`/direct/task/${id}`, body, config);
}