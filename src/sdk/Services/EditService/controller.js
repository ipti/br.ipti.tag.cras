import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { useFetchAllTechnician } from "../../Technician/Technician/request";
import { useFetchAllTypesServices } from "../../TypeService/TypeServices/request";
import { useFetchAllUserIdentifyAttendance } from "../CreateService/request";
import { EditServiceRequest, useFetchOneService } from "./request";

export const EditServicesController = (id, setIsError, setIsVerify, show) => {
    const history = useNavigate();


    const { data: allService, isLoading: isLoadingService, error: errorService } = useFetchAllTypesServices();
    const { data: allTechnician, isLoading: isLoadingtechnician, error: errorTechnician } = useFetchAllTechnician();
    const { data: allUserIdentify, isLoading: isLoadingUserIdentify, error: errorUserIdentify } = useFetchAllUserIdentifyAttendance();
    const { data: oneService} = useFetchOneService(id);


    const EditServicesRequestMutation = useMutation(
        (data) => EditServiceRequest(data, id),
        {
            onError: (error) => {
                console.log(error.response.data.message)
                setIsError(error.response.data.message)
                show()
                if (error.response.status === 401 ||error.response.status === 403) {
                    logout();
                    history("/login")
                }
                alert(error?.response?.data.message)

            },
            onSuccess: (data) => {
                console.log(data);
                setIsVerify(true)
                show()
            },
        }
    );

    return {
        EditServicesRequestMutation,
        isLoadingService,
        errorService,
        allService,
        allTechnician,
        isLoadingtechnician,
        errorTechnician,
        allUserIdentify, 
        isLoadingUserIdentify, 
        errorUserIdentify,
        oneService
    }
}