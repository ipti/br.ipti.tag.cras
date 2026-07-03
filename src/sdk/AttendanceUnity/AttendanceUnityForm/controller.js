import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import {
    CreateAttendanceUnityRequest,
    EditAttendanceUnityAndAddressRequest,
    useFetchOneAttendanceUnity,
} from "./request";

export const AttendanceUnityFormController = () => {
    const { id } = useParams();
    const isEdit = !!id;
    const navigate = useNavigate();

    const { data: oneAttendance } = useFetchOneAttendanceUnity(id);

    const onError = (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            logout();
            navigate("/login");
        }
        alert(error?.response?.data?.message ?? "Erro ao salvar");
    };

    const createMutation = useMutation(CreateAttendanceUnityRequest, {
        onSuccess: () => navigate("/unidades"),
        onError,
    });

    const editMutation = useMutation(
        (data) => EditAttendanceUnityAndAddressRequest(data, id),
        { onSuccess: () => navigate("/unidades"), onError }
    );

    return { isEdit, oneAttendance, createMutation, editMutation };
};
