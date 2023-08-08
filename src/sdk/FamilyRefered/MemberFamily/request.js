import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

export const CreateFamilyMemberRequest = async (body) => {
  return await http.post("/familymember", body, config)
}

const getAllFamilyMember = async () => {
  return await http.get("/familymember", config)
}

const getOneFamilyMember = async (id) => {
  return await http.get(`/familymember/${id}`, config)
}

export const DeleteFamilyMember = async (id) => {
  return await http.delete(`/familymember/${id}`, config)
}

export const EditFamilyMember = async (body, id) => {
  return await http.put(`/familymember/${id}`, body, config)
}
export const useFetchAllFamilyMember = () => {
  return useQuery("AllFamilyMember", () => getAllFamilyMember());
};

export const useFetchOneFamilyMember = (id) => {
  return useQuery("OneFamilyMember", () => getOneFamilyMember(id));
};