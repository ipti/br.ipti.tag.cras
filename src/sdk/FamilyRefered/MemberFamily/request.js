import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

export const CreateFamilyMemberRequest = async (body) => {
    return await http.post("/familymember", body, config)
  }

  export const getAllFamilyMember = async () => {
    return await http.get("/familymember", config)
  }

  export const useFetchAllFamilyMember = () => {
    return useQuery("AllFamilyMember", () => getAllFamilyMember());
  };