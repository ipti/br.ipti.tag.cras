import { useQuery } from "react-query";
import http from "../../services/axios";
import { getToken, logout } from "../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const StateRequest = async () => {
  return await http.get("/bff/get-state", config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        logout()
        window.location.reload()
      }
      alert(err.message)
      throw err;
    });;
}

export const useFetchAllState = () => {
  return useQuery("AllState", () => StateRequest());
};

const CityRequest = async (id) => {
  return await http.get("/bff/get-city", config, {
    params: {
      ufId: id
    }
  }).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        logout()
        window.location.reload()
        alert(err.message)

      }
      throw err;
    });;
}

export const useFetchAllCity = (id) => {
  return useQuery("AllCity", () => CityRequest(id));
};