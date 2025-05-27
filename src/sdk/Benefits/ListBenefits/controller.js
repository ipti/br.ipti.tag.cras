import { useMutation } from "react-query";
import { DeleteBenefitsRequest, useFetchAllBenefits } from "./request";
import { logout } from "../../../services/localstorage";
import { useNavigate } from "react-router-dom";

export const BenefitsController = () => {
  const history = useNavigate();

  const { data: benefitsfetch, isLoading, error,  refetch} = useFetchAllBenefits()

  const DeleteBenefitsRequestMutation = useMutation(
    (id) => DeleteBenefitsRequest(id),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        alert(error.response.data.message)
        if (error.response.status === 401) {
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
    benefitsfetch, isLoading, error, DeleteBenefitsRequestMutation
  }
}