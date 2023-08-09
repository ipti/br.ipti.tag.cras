import { useMutation } from "react-query";
import { DeleteServiceRequest, useFetchAllService } from "./request"
import { useFetchAllTypesServices } from "../../TypeService/TypeServices/request";
import { useFetchAllTechnician } from "../../Technician/Technician/request";


export const ServiceController = () => {


    const { data: servicefetch, isLoading, error, refetch } = useFetchAllService()
    const {data: typeServicesrequest} = useFetchAllTypesServices()
    const {data: technicianRequest} = useFetchAllTechnician()

    const DeleteServicesRequestMutation = useMutation(
        (id) => DeleteServiceRequest(id),
        {
            onError: (error) => {
                console.log(error.response.data.message)
            },
            onSuccess: (data) => {
                console.log(data);
                refetch()
            },
        }
    );


    return {
        servicefetch, isLoading, error, DeleteServicesRequestMutation, typeServicesrequest, technicianRequest
    }
}