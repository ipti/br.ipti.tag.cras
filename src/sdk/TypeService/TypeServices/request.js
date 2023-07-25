import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

const AllTypesServicesRequest = async () => {
    return await http.get("/typesServices", config);
}

export const useFetchAllTypesServices = () => {
    return useQuery("AllTypesServices", () => AllTypesServicesRequest());
  };
