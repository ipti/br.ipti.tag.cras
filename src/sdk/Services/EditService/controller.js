import { useMutation } from "react-query";
import { useFetchAllUserIdentify } from "../../FamilyRefered/request";
import { useFetchAllTechnician } from "../../Technician/Technician/request";
import { useFetchAllTypesServices } from "../../TypeService/TypeServices/request";
import { EditServiceRequest, useFetchOneService } from "./request";

export const EditServicesController = (id) => {


    const { data: allService, isLoading: isLoadingService, error: errorService } = useFetchAllTypesServices();
    const { data: allTechnician, isLoading: isLoadingtechnician, error: errorTechnician } = useFetchAllTechnician();
    const { data: allUserIdentify, isLoading: isLoadingUserIdentify, error: errorUserIdentify } = useFetchAllUserIdentify();
    const { data: oneService} = useFetchOneService(id);

    const EditServicesRequestMutation = useMutation(
        (data) => EditServiceRequest(data, id),
        {
            onError: (error) => {
                console.log(error.response.data.message)
            },
            onSuccess: (data) => {
                console.log(data);
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