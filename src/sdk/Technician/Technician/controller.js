import { useMutation } from "react-query";
import { DeleteTechnicianRequest, useFetchAllTechnician } from "./request";
import { logout } from "../../../services/localstorage";
import { useNavigate } from "react-router-dom";

export const TechnicianController = () => {
  const history = useNavigate();

  const { data: technicianfetch, isLoading, error, refetch } = useFetchAllTechnician()


  // if (error?.response.status === 401 | 403) {
  //   logout();
  //   history("/login")
  // }
  const DeleteTechnicianRequestMutation = useMutation(
    (id) => DeleteTechnicianRequest(id),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        if (error.response.status === 401 | 403) {
          logout();
          history("/login")
        }
      },
      onSuccess: (data) => {
        refetch()
      },

    }
  );

  return {
    technicianfetch, isLoading, error, DeleteTechnicianRequestMutation
  }
}