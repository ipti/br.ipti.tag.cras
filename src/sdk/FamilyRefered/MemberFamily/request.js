import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};


export const CreateUserIdentifyWithFamilyRequest = async (body) => {
  return await http.post(`/bff/family/create-user-with-family`, body, config)
}


export const DeleteFamilyMember = async (id) => {
  return await http.delete(`/direct/user-identify/${id}`, config)
}


