import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  
 
<<<<<<< HEAD
export const FamilyHCIdRequest = async (id) => {
=======
const FamilyHCIdRequest = async (id) => {
>>>>>>> 934d3c805e1f7b73812cc389d1c8b50ea2f74c74
    return await http.get(`/happychild/findAll?id=${id}`, config).then(response => response.data)
      .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  }
<<<<<<< HEAD
  

  export const useFetchAllFamilyHC = (id) => {
    return useQuery("AllFamilyHC", () => FamilyHCIdRequest(id));
  };
=======
  
>>>>>>> 934d3c805e1f7b73812cc389d1c8b50ea2f74c74
