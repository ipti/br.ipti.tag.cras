import { useEffect, useState } from "react";
import { TypesServicesController } from "../../../sdk/TypeService/TypeServices/controller";

export const TypeServiceState = () => {

    const {typesServicesfetch, isLoading, error, DeleteTypesServicesRequestMutation } = TypesServicesController();
    const [typesServices, setTypesServices] = useState([]);

    useEffect(() => {
        if(typesServicesfetch){
            setTypesServices(typesServicesfetch)
        }
    }, [typesServicesfetch])


    const DeleteTypeServices = (id) => {
        DeleteTypesServicesRequestMutation.mutate(id)
    }
    
    return{
        typesServices, isLoading, error, DeleteTypeServices
    }
}