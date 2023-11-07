import http from "../../../services/axios"
import { getToken } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };


export const CreateBenefitsRequest = async (body) => {
    return await http.post("/benefits", body, config)
  }
  