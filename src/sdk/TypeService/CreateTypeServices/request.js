import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

export const CreateTypesServicesRequest = async (body) => {
    return await http.post("/direct/task", body, config)
}