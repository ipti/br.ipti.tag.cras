import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

export const CreateServiceRequest = async (body) => {
    return await http.post("/service", body, config)
}