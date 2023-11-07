import { useQuery } from "react-query";
import http from "../../services/axios";
import { getToken, logout } from "../../services/localstorage";


const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const AllUserIdentifyRequest = async () => {
  return await http.get("/bff/get-all-family-representative", config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      alert(err)
      throw err;
    });
}

export const CreateUserIdentifyRequest = async (body) => {
  return await http.post("/bff/create-user-without-family", body, config)
}

const FamilyReferedIdRequest = async (id) => {
  return await http.get(`/bff/get-all-from-family?familyId=${id}`, config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        logout()
        window.location.reload()
      }
      alert(err.message)
      throw err;
    });
}

export const EditUserIdentifyRequest = async (body, id) => {
  return await http.put(`/user-identify/${id}`, body, config)
}

export const EditAddressRequest = async (body, id) => {
  return await http.put(`/address/${id}`, body, config)
}

export const CreateFamilyBenefitsRequest = async (body) => {
  return await http.post(`/family-benefits`, body, config)
}


export const useFetchAllUserIdentify = () => {
  return useQuery("AllUserIdentify", () => AllUserIdentifyRequest());
};

export const useFetchFamilyReferedId = (id) => {
  return useQuery("FamilyReferedId", () => FamilyReferedIdRequest(id));
};
