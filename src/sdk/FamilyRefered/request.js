import { useQuery } from "react-query";
import http from "../../services/axios";
import { getToken } from "../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

 const AllUserIdentifyRequest = async () => {
    return await http.get("/userIdentify", config)
}

export const CreateUserIdentifyRequest = async (body) => {
  return await http.post("/userIdentify", body, config)
}

const FamilyReferedIdRequest = async (id) => {
  return await http.get(`/userIdentify/${id}`, config)
}

export const EditUserIdentifyRequest = async (body, id) => {
  return await http.put(`/userIdentify/${id}`, body, config)
}


export const useFetchAllUserIdentify = () => {
    return useQuery("AllUserIdentify", () => AllUserIdentifyRequest());
  };

  export const useFetchFamilyReferedId = (id) => {
    return useQuery("FamilyReferedId", () => FamilyReferedIdRequest(id));
  };
