import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const OneUsersRequest = async (id) => {
    return await http.get(`/user/${id}`, config);
}

export const useFetchOneUser = (id) => {
    return useQuery("OneUser", () => OneUsersRequest(id));
};


export const EditUserRequest = async (body, id) => {
    return await http.put(`/user/${id}`, body, config);
}