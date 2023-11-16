import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

export const CreateUserRequest = async (body) => {
    return await http.post("/direct/user", body, config)
}