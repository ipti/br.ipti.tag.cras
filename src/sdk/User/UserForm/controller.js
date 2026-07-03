import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { CreateUserRequest, EditUserRequest, useFetchOneUser } from "./request";

export const UserFormController = () => {
    const { id } = useParams();
    const isEdit = !!id;
    const navigate = useNavigate();

    const { data: user } = useFetchOneUser(id);

    const onError = (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            logout();
            navigate("/login");
        }
        alert(error?.response?.data?.message ?? "Erro ao salvar");
    };

    const createMutation = useMutation(CreateUserRequest, {
        onSuccess: () => navigate("/usuarios"),
        onError,
    });

    const editMutation = useMutation(
        (data) => EditUserRequest(data, id),
        { onSuccess: () => navigate("/usuarios"), onError }
    );

    return { isEdit, user, createMutation, editMutation };
};
