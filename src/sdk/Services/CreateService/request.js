import { useQuery } from "react-query";
import http from "../../../services/axios";
import { GetIdAttendance, getToken, logout } from "../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

export const CreateServiceRequest = async (body) => {
    return await http.post("/direct/attendance", body, config)
}

export const CreateServiceAttendanceRequest = async (body) => {
  return await http.post("/bff/attendance", body, config)
}

export const CreateServiceAttendanceNewUserRequest = async (body) => {
  return await http.post("/bff/attendance/new-user-attendance", body, config)
}

const AllUserIdentifyRequest = async () => {
  return await http.get("/bff/user-identify/from-attendance-unity", {params: {attendance_unity_fk: GetIdAttendance()}}, config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

const UserIndentifyByNameCpfRequest = async (nameorcpf) => {
  return await http.get("/bff/user-identify/search", {params: {nameorcpf: nameorcpf}}, config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

export const useFetchAllUserIdentifyAttendance = () => {
  return useQuery("AllUserIdentifyAttendance", () => AllUserIdentifyRequest());
};

export const useFetchUserIdentifyByNameCpfRequest = (_name) => {
  return useQuery("UserIndentifyByNameCpfRequest", () => UserIndentifyByNameCpfRequest(_name));
};

