import { useEffect, useState } from "react";
import { ServiceController } from "../../../sdk/Services/Service/controller";

export const ServiceState = () => {

    const {servicefetch, isLoading, error, DeleteServicesRequestMutation } = ServiceController();
    const [service, setService] = useState([]);

    useEffect(() => {
        if(servicefetch){
            setService(servicefetch.data.data)
        }
    }, [servicefetch])

    const deleteService = (id) => {
        DeleteServicesRequestMutation.mutate(id)
    }
    

    return{
        service, isLoading, error, deleteService
    }
}