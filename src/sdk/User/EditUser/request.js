import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

export const OneUsersRequest = async (id) => {
    return await http.get(`/direct/user/${id}`, config).then(response => response.data)
        .catch(err => {
            if (err.response.status === 401 || err.response.status === 403) {
                logout()
                window.location.reload()
            }
            throw err;
        });;
}

export const useFetchOneUser = (id) => {
    return useQuery("OneUser", () => OneUsersRequest(id));
};


export const EditUserRequest = async (body, id) => {
    return await http.put(`/direct/user/${id}`, body, config);
}