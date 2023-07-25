import { useEffect, useState } from "react";
import { TechnicianController } from "../../sdk/Technician/Technician/controller";

export const TechnicianState = () => {

    const {technicianfetch, isLoading, error } = TechnicianController();
    const [technician, setTechnician] = useState([]);

    useEffect(() => {
        if(technicianfetch){
            setTechnician(technicianfetch.data.data)
        }
    }, [technicianfetch])
    

    return{
        technician, isLoading, error
    }
}