import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  
 
export const FamilyHCIdRequest = async (id) => {
    return await http.get(`/happychild/findAll?id=${id}`, config).then(response => response.data)
      .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  }
  

  export const useFetchAllFamilyHC = (id) => {
    return useQuery("AllFamilyHC", () => FamilyHCIdRequest(id));
  };