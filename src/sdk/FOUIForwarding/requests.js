import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

export const getFOUIForwardingByUserIdentification = async (id) => {
    return await http.get(`/bff/foui-forwarding/user-identify?userIdentifyId=${id}`, config);
}