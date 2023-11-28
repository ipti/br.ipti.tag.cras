import http from "../../../services/axios"
import { getToken } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

export const EditUserIdentifyRequest = async (body, id) => {
  return await http.put(`/direct/user-identify/${id}`, body, config)
}
export const EditFamilyRequest = async (body, id) => {
  return await http.put(`/direct/family/${id}`, body, config)
}

export const EditAddressRequest = async (body, id) => {
  return await http.put(`/direct/address/${id}`, body, config)
}

export const EditVulnerabilityRequest = async (body, id) => {
  return await http.put(`/direct/vulnerability/${id}`, body, config)
}

export const CreateFamilyBenefitsRequest = async (body) => {
  return await http.post(`/direct/family-benefits`, body, config)
}

export const CreateCondicionalitiesRequest = async (body) => {
  return await http.post(`/bff/condicionalities`, body, config)
}


export const DeleteFamilyBenefitsRequest = async (id) => {
  return await http.delete(`/direct/family-benefits/${id}`, config)
}


export const DeleteFamilyRequest = async (id) => {
  return await http.delete(`/bff/family/delete-family`, {params: {familyId: id}}, config)
}
