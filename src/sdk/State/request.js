import { useQuery } from "react-query";
import http from "../../services/axios";
import { getToken, logout } from "../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const StateRequest = async () => {
  return await http.get("/bff/edcenso/uf", config).then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

export const useFetchAllState = () => {
  return useQuery("AllState", () => StateRequest());
};

const CityRequest = async (uf_fk) => {
  return await http.get("/bff/edcenso/cities-by-uf", { ...config, params: { uf_fk } })
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 403) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

export const useFetchAllCity = (uf_fk) => {
  return useQuery(["AllCity", uf_fk], () => CityRequest(uf_fk), {
    enabled: !!uf_fk,
  });
};