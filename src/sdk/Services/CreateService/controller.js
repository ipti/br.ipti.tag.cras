import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useFetchAllTechnician } from "../../Technician/Technician/request";
import { useFetchAllTypesServices } from "../../TypeService/TypeServices/request";
import { CreateServiceRequest } from "./request";
import { useFetchAllUserIdentify } from "../../FamilyRefered/request";
import { logout } from "../../../services/localstorage";

export const CreateServicesController = () => {
    const history = useNavigate();


    const { data: allService, isLoading: isLoadingService, error: errorService } = useFetchAllTypesServices();
    const { data: allTechnician, isLoading: isLoadingtechnician, error: errorTechnician } = useFetchAllTechnician();
    const { data: allUserIdentify, isLoading: isLoadingUserIdentify, error: errorUserIdentify } = useFetchAllUserIdentify();

    // if (errorService?.response.status === 401 | 403) {
    //     logout();
    //     history("/login")
    // }

    const CreateServicesRequestMutation = useMutation(
        (data) => CreateServiceRequest(data),
        {
            onError: (error) => {
                console.log(error.response.data.message)
                if (error.response.status === 401 | 403) {
                    logout();
                    history("/login")
                }
            },
            onSuccess: (data) => {
                console.log(data);
                history("/atendimento");
            },
        }
    );

    return {
        CreateServicesRequestMutation,
        isLoadingService,
        errorService,
        allService,
        allTechnician,
        isLoadingtechnician,
        errorTechnician,
        allUserIdentify,
        isLoadingUserIdentify,
        errorUserIdentify
    }
}