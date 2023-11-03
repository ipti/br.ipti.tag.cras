import { useQuery } from "react-query";
import http from "../../services/axios"
import { OneUsersRequest } from "../User/EditUser/request";

export const LoginRequest = async (body) => {
    return await http.post("/auth/login", body)
}

export const useFetchOneUserAplication = (id) => {
    return useQuery("OneUserAplication", () => OneUsersRequest(id));
};