import http from "../../../services/axios"
import { getToken } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  

export const EditUserIdentifyRequest = async (body, id) => {
    return await http.put(`/user-identify/${id}`, body, config)
  }
  
  export const EditAddressRequest = async (body, id) => {
    return await http.put(`/address/${id}`, body, config)
  }
  
  export const CreateFamilyBenefitsRequest = async (body) => {
    return await http.post(`/family-benefits`, body, config)
  }

  export const DeleteFamilyBenefitsRequest = async (id) => {
    return await http.delete(`/family-benefits/${id}`, config)
  }
  