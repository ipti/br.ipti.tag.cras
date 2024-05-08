import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { EditBenefitsRequest, useFetchOneBenefits } from "./request";

export const EditBenefitsController = (id) => {
    
    const history = useNavigate();

    const { data: OneBenefits, isLoading: isLoadingBenefits, error: errorBenefits } = useFetchOneBenefits(id);

    const EditBenefitsRequestMutation = useMutation(
        (data) => EditBenefitsRequest(data, id),
        {
            onError: (error) => {
                
                if (error.response.status === 401 ||error.response.status === 403) {
                    logout();
                    history("/login")
                }
                alert(error?.response?.data.message)

            },
            onSuccess: () => {
                history("/beneficios")

            },
        }
    );

    return {
        EditBenefitsRequestMutation,
        OneBenefits,
        isLoadingBenefits,
        errorBenefits
    }
}