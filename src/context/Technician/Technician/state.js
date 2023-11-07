import { useEffect, useState } from "react";
import { TechnicianController } from "../../../sdk/Technician/Technician/controller";

export const TechnicianState = () => {

    const {technicianfetch, isLoading, error, DeleteTechnicianRequestMutation } = TechnicianController();
    const [technician, setTechnician] = useState([]);

    useEffect(() => {
        if(technicianfetch){
            setTechnician(technicianfetch)
        }
    }, [technicianfetch])

    const DeleteTechnician = (id) => {
        DeleteTechnicianRequestMutation.mutate(id)
    }
    

    return{
        technician, isLoading, error, DeleteTechnician
    }
}