import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken } from "../../../services/localstorage";

const config = { headers: { Authorization: `Bearer ${getToken()}` } };

export const CreateAttendanceUnityRequest = async (body) =>
    http.post("/bff/attendance-unity", body, config);

export const EditAttendanceUnityAndAddressRequest = async (data, id) =>
    http.put(`/bff/attendance-unity/${id}`, data, config);

const OneAttendanceUnityRequest = async (id) =>
    http.get(`/bff/attendance-unity/${id}`, config).then(r => r.data);

export const useFetchOneAttendanceUnity = (id) =>
    useQuery(["OneAttendanceUnity", id], () => OneAttendanceUnityRequest(id), { enabled: !!id });
