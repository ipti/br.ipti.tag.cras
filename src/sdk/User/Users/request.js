import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

const AllUserRequest = async () => {
    return await http.get("/user", config).then(response => response.data)
    .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
            logout()
            window.location.reload()
        }
        throw err;
    });;
}

export const useFetchAllUser = () => {
    return useQuery("AllUser", () => AllUserRequest());
  };

  export const DeleteUserRequest = async (id) => {
    return await http.delete(`/user/${id}`, config);
  }
