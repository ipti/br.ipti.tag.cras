import { useQuery } from "react-query";
import http from "../../services/axios";

export const LoginRequest = async (body) => {
    return await http.post("/auth/login", body);
};

export const MeRequest = async () => {
    return await http.get("/auth/me");
};

export const useFetchMe = () => {
    return useQuery("me", MeRequest, {
        staleTime: 5 * 60 * 1000, // 5 minutos — não refaz enquanto o token não mudar
        retry: false,
    });
};
