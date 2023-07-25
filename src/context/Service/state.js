import { useEffect, useState } from "react";
import { ServiceController } from "../../sdk/Services/Service/controller";

export const ServiceState = () => {

    const {servicefetch, isLoading, error } = ServiceController();
    const [service, setService] = useState([]);

    useEffect(() => {
        if(servicefetch){
            setService(servicefetch.data.data)
        }
    }, [servicefetch])

    console.log(error)
    

    return{
        service, isLoading, error
    }
}