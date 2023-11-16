import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  const OneBenefitsRequest = async (id) => {
    return await http.get(`/direct/benefits/${id}`, config).then(response => response.data)
    .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
            logout()
            window.location.reload()
        }
        throw err;
        
    });;
}

export const useFetchOneBenefits = (id) => {
    return useQuery("OneBenefits", () => OneBenefitsRequest(id));
};


export const EditBenefitsRequest = async (body, id) => {
    return await http.put(`/direct/benefits/${id}`, body, config)
}