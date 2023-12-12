import http from "../../../../services/axios";
import { getToken } from "../../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };


export const CreateTechnicianVisitsRequest = async (body) => {
    return await http.post("/bff/technician-visits", body, config)
  }
  