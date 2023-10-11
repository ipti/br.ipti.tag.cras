import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { CreateBenefitsRequest } from "./request";

export const CreateBenefitsController = () => {
  const history = useNavigate();

//   const { data: userfetch, isLoading, error, refetch } = useFetchAllUser()

  const CreateBenefitsRequestMutation = useMutation(
    (data) => CreateBenefitsRequest(data),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
          history("/login")
        }

      },
      onSuccess: (data) => {
        history("/beneficios");
      },

    }
  );

  return {
    CreateBenefitsRequestMutation
  }
}