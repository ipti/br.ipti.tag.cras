import { useQuery } from "react-query";
import { getToken } from "../../services/localstorage";
import http from "../../services/axios";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

export const getFOUIForwardingByUserIdentification = async (id) => {
    return await http.get(`/bff/foui-forwarding/user-identify?userIdentifyId=${id}`, config);
}


export  const getFOUIForwardingByForwardingId = async (id) => {
    return await http.get(`/bff/foui-forwarding/forwarding?forwardingId=${id}`, config);
}

export const useFetchOneFowardByForwarding = (id) => {
    return useQuery("OneFowardByForwarding ", () => getFOUIForwardingByForwardingId(id).then(response => response.data));
};

