import { useEffect, useState } from "react";
import { TypesServicesController } from "../../../sdk/TypeService/TypeServices/controller";

export const TypeServiceState = () => {

    const {typesServicesfetch, isLoading, error } = TypesServicesController();
    const [typesServices, setTypesServices] = useState([]);

    useEffect(() => {
        if(typesServicesfetch){
            setTypesServices(typesServicesfetch.data.data)
        }
    }, [typesServicesfetch])

    
    return{
        typesServices, isLoading, error
    }
}