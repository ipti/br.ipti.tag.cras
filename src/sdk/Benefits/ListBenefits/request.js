import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};



const AllBenefitsRequest = async () => {
  return await http.get("/direct/benefits", config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        // logout()
        // window.location.reload()
      }
      
      throw err;
    });;
}

export const DeleteBenefitsRequest = async (id) => {
  return await http.delete(`/direct/benefits/${id}`, config);
}

export const useFetchAllBenefits = () => {
  return useQuery("AllBenefits", () => AllBenefitsRequest());
};
