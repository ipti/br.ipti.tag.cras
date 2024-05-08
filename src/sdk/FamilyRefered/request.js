import { useQuery } from "react-query";
import http from "../../services/axios";
import { GetIdAttendance, getToken, logout } from "../../services/localstorage";


const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const AllUserIdentifyRequest = async () => {
  return await http.get("/bff/family/get-all-family-representative", { params: { attendance_unity_fk: GetIdAttendance() ? parseInt(GetIdAttendance()) : undefined } }, config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

export const CreateUserIdentifyRequest = async (body) => {
  return await http.post("/bff/user-identify/create-user-without-family", body, config)
}

const FamilyReferedIdRequest = async (id) => {
  return await http.get(`/bff/family/get-all-from-family?familyId=${id}`, config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

export const EditUserIdentifyRequest = async (body, id) => {
  return await http.put(`/direct/user-identify/${id}`, body, config)
}

export const EditAddressRequest = async (body, id) => {
  return await http.put(`/direct/address/${id}`, body, config)
}

export const CreateFamilyBenefitsRequest = async (body) => {
  return await http.post(`/direct/family-benefits`, body, config)
}

export const useFetchAllUserIdentify = () => {
  return useQuery("AllUserIdentify", () => AllUserIdentifyRequest());
};

export const useFetchFamilyReferedId = (id) => {
  return useQuery("FamilyReferedId", () => FamilyReferedIdRequest(id));
};
