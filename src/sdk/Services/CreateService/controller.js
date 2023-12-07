import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { useFetchAllTechnician } from "../../Technician/Technician/request";
import { useFetchAllTypesServices } from "../../TypeService/TypeServices/request";
import { CreateServiceRequest, useFetchAllUserIdentifyAttendance } from "./request";

export const CreateServicesController = () => {
    const history = useNavigate();


    const { data: allService, isLoading: isLoadingService, error: errorService } = useFetchAllTypesServices();
    const { data: allTechnician, isLoading: isLoadingtechnician, error: errorTechnician } = useFetchAllTechnician();
    const { data: allUserIdentify, isLoading: isLoadingUserIdentify, error: errorUserIdentify } = useFetchAllUserIdentifyAttendance();

    // if (errorService?.response.status === 401 | 403) {
    //     logout();
    //     history("/login")
    // }

    const CreateServicesRequestMutation = useMutation(
        (data) => CreateServiceRequest(data),
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
                console.log(data);
                history("/atendimento");
            },
        }
    );

    return {
        CreateServicesRequestMutation,
        allService,
        isLoadingService,
        errorService,
        allTechnician,
        isLoadingtechnician,
        errorTechnician,
        allUserIdentify,
        isLoadingUserIdentify,
        errorUserIdentify
    }
}