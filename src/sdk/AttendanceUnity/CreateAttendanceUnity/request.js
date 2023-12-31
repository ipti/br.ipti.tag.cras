import http from "../../../services/axios"
import { getToken } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };


export const CreateAttendanceUnityRequest = async (body) => {
    return await http.post("/bff/attendance-unity", body, config)
  }
  