import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = { headers: { Authorization: `Bearer ${getToken()}` } };

export const CreateUserRequest = async (body) =>
    http.post("/bff/user", body, config);

export const EditUserRequest = async (body, id) =>
    http.put(`/bff/user/${id}`, body, config);

const OneUserRequest = async (id) =>
    http.get(`/bff/user/${id}`, config).then(r => r.data)
        .catch(err => {
            if (err.response?.status === 401 || err.response?.status === 403) {
                logout();
                window.location.reload();
            }
            throw err;
        });

export const useFetchOneUser = (id) =>
    useQuery(["OneUser", id], () => OneUserRequest(id), { enabled: !!id });
