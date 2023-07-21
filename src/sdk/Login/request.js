import http from "../../services/axios"

export const LoginRequest = async (body) => {
    return await http.post("/auth/login", body)
}