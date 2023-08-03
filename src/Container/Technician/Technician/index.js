import React from "react";
import TechnicianPage from "../../../Page/Technician/Technician";
import TechnicianProvider from "../../../context/Technician/Technician/context";

const Technician = () => {
    return (
        <TechnicianProvider>
            <TechnicianPage />
        </TechnicianProvider>
    )
}

export default Technician;