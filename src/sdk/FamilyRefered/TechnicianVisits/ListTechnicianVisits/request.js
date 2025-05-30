import { useQuery } from "react-query";
import { getToken } from "../../../../services/localstorage";
import http from "../../../../services/axios";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

export const EditTechnicianVisitsRequest = async (id, body) => {
  return await http.put("/bff/technician-visits/" + id, body, config)
}

const TechnicianVisitsRequest = async () => {
  return await http.get("/bff/technician-visits", config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        // logout()
        // window.location.reload()
      }
      
      throw err;
    });;
}



export const useFetchTechnicianVisits = () => {
  return useQuery("TechnicianVisits", () => TechnicianVisitsRequest());
};
