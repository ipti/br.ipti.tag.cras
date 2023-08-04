import { createContext } from "react";
import { EditTechnicianState } from "./state";

export const EditTechnicianContext = createContext({});

const EditTechnicianProvider = ({ children }) => {

    const { CreateSchema, handleEditTechnician, initialValue, technician, show, toast } = EditTechnicianState();


    return (
        <EditTechnicianContext.Provider value={{ handleEditTechnician, initialValue, CreateSchema, technician, show, toast }}>
            {children}
        </EditTechnicianContext.Provider>
    )
}

export default EditTechnicianProvider;