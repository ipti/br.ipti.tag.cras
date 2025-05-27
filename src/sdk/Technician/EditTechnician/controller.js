import { useMutation } from "react-query";
import { EditTechnicianRequest, useFetchOneTechnician } from "./request";
import { logout } from "../../../services/localstorage";
import { useNavigate } from "react-router-dom";
import { useFetchAllUser } from "../../User/Users/request";

export const EditTechnicianController = (id, setIsError, setIsVerify, show) => {

  const { data: technicianRequest, refetch } = useFetchOneTechnician(id);
  const { data: userfetch, isLoading, error } = useFetchAllUser()

  const history = useNavigate();

  const EditTechnicianRequestMutation = useMutation(
    (data) => EditTechnicianRequest(data, id),
    {
      onError: (error) => {
        setIsError(error.response.data.message)
        show()
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
          history("/login")
        }
        alert(error?.response?.data.message)
      },
      onSuccess: (data) => {
        refetch()
        setIsVerify(true)
        show()
      },
    }
  );

  return {
    technicianRequest, EditTechnicianRequestMutation, refetch, userfetch, isLoading, error
  }
}