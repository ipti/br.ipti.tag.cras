import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

export const CreateFamilyMemberRequest = async (body) => {
  return await http.post("/familymember", body, config)
}

const getAllFamilyMember = async () => {
  return await http.get("/familymember", config).then(response => response.data)
  .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
          logout()
          window.location.reload()
      }
      alert(err)
      throw err;
  });
}

const getOneFamilyMember = async (id) => {
  return await http.get(`/familymember/${id}`, config).then(response => response.data)
  .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
          logout()
          window.location.reload()
      }
      alert(err)
      throw err;
  });
}

export const DeleteFamilyMember = async (id) => {
  return await http.delete(`/familymember/${id}`, config)
}

export const EditFamilyMember = async (body, id) => {
  return await http.put(`/familymember/${id}`, body, config)
}
export const useFetchAllFamilyMember = () => {
  return useQuery("AllFamilyMember", () => getAllFamilyMember());
};

export const useFetchOneFamilyMember = (id) => {
  return useQuery("OneFamilyMember", () => getOneFamilyMember(id));
};