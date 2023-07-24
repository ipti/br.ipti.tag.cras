import { useQuery } from "react-query";
import http from "../../services/axios";
import { getToken } from "../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

const AllUserRequest = async () => {
    return await http.get("/user", config);
}

export const useFetchAllUser = () => {
    return useQuery("AllUser", () => AllUserRequest());
  };

