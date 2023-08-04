import React from "react";
import CreateTechnicianProvider from "../../../context/Technician/CreateTechnician/context";
import CreateTechnicianScreen from "../../../Page/Technician/CreateTechnician";

const CreateTechnician = () => {
    return(
        <CreateTechnicianProvider>
            <CreateTechnicianScreen />
        </CreateTechnicianProvider>
    )
}

export default CreateTechnician;