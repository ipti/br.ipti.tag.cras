import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateTechnicianVisitsRequest } from "./requests";
import { logout } from "../../../../services/localstorage";
import queryClient from "../../../../services/react-query";

export const CreateTechnicianVisitwsController = () => {
  const history = useNavigate();

//   const { data: userfetch, isLoading, error, refetch } = useFetchAllUser()

  const CreateTechnicianVisitsRequestMutation = useMutation(
    (data) => CreateTechnicianVisitsRequest(data),
    {
      onError: (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
          history("/login")
        }
        alert(error?.response?.data.message)
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("TechnicianVisits")
      },

    }
  );

  return {
    CreateTechnicianVisitsRequestMutation
  }
}