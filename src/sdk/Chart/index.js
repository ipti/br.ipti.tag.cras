import { useQuery } from "react-query";
import http from "../../services/axios";
import { getToken } from "../../services/localstorage";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

const AllChartsRequest = async () => {
  return await http.get("/services-resume", config);
};

export const useFetchAllCharts = () => {
  return useQuery("AllCharts", () => AllChartsRequest());
};
