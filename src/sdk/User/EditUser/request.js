import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

export const OneUsersRequest = async (id) => {
    return await http.get(`/user/${id}`, config).then(response => response.data)
        .catch(err => {
            if (err.response.status === 401 || err.response.status === 403) {
                logout()
                window.location.reload()
            }
            alert(err.message)
            throw err;
        });;
}

export const useFetchOneUser = (id) => {
    return useQuery("OneUser", () => OneUsersRequest(id));
};


export const EditUserRequest = async (body, id) => {
    return await http.put(`/user/${id}`, body, config);
}