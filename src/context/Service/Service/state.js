import { useEffect, useState } from "react";
import { ServiceController } from "../../../sdk/Services/Service/controller";

export const ServiceState = () => {

    const { servicefetch, isLoading, error, DeleteServicesRequestMutation, typeServicesrequest, technicianRequest } = ServiceController();
    const [service, setService] = useState([]);
    const [typeService, setTypeService] = useState([]);
    const [technician, setTechnician] = useState([]);


    useEffect(() => {
        if (servicefetch) {
            setService(servicefetch.data.data)
        }
        if (typeServicesrequest) {
            setTypeService(typeServicesrequest.data.data)
        }
        if (technicianRequest) {
            setTechnician(technicianRequest.data.data)
        }
    }, [servicefetch, typeServicesrequest, technicianRequest])

    const deleteService = (id) => {
        DeleteServicesRequestMutation.mutate(id)
    }


    return {
        service, isLoading, error, deleteService, typeService, technician
    }
}