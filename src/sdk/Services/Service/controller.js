import { useMutation } from "react-query";
import { DeleteServiceRequest, useFetchAllService } from "./request"
import { useFetchAllTypesServices } from "../../TypeService/TypeServices/request";
import { useFetchAllTechnician } from "../../Technician/Technician/request";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";


export const ServiceController = () => {
    const history = useNavigate();


    const { data: servicefetch, isLoading, error, refetch } = useFetchAllService()
    const {data: typeServicesrequest} = useFetchAllTypesServices()
    const {data: technicianRequest} = useFetchAllTechnician()


    // if (error?.response.status === 401 | 403) {
    //     logout();
    //     history("/login")
    // }

    const DeleteServicesRequestMutation = useMutation(
        (id) => DeleteServiceRequest(id),
        {
            onError: (error) => {
                console.log(error.response.data.message);
                if (error.response.status === 401 | 403) {
                    logout();
                    history("/login")
                }
            
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