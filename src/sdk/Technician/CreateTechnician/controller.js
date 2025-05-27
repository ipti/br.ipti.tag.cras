import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateTechnicianRequest } from "./request";
import { logout } from "../../../services/localstorage";
import { useFetchAllUser } from "../../User/Users/request";

export const CreateTechnicianController = () => {
  const history = useNavigate();

  const { data: userfetch, isLoading, error, refetch } = useFetchAllUser()

  const CreateTechnicianRequestMutation = useMutation(
    (data) => CreateTechnicianRequest(data),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
          history("/login")
        }
        alert(error?.response?.data.message)
      },
      onSuccess: (data) => {
        history("/tecnico");
      },

    }
  );

  return {
    CreateTechnicianRequestMutation, userfetch, isLoading, error, refetch
  }
}