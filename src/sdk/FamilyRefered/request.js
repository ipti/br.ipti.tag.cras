import { useQuery } from "react-query";
import http from "../../services/axios";
import { getToken, logout } from "../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

 const AllUserIdentifyRequest = async () => {
    return await http.get("/user-identify", config).then(response => response.data)
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
  return await http.post("/user-identify", body, config)
}

const FamilyReferedIdRequest = async (id) => {
  return await http.get(`/user-identify/${id}`, config).then(response => response.data)
  .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
          logout()
          window.location.reload()
      }
      throw err;
  });
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
