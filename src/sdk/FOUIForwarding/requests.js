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

export const EditFOUIForwardingRequest = async (body, id) => {
    return await http.put("/bff/foui-forwarding/"+ id, body, config);
}

export const useFetchOneForwardByForwarding = (id) => {
    return useQuery("OneForwardByForwarding ", () => getFOUIForwardingByForwardingId(id).then(response => response.data));
};



