import { createContext } from "react";
import { EditTechnicianState } from "./state";

export const EditTechnicianContext = createContext({});

const EditTechnicianProvider = ({ children }) => {

    const { CreateSchema, handleEditTechnician, initialValue, technician, show, toast, user,functions } = EditTechnicianState();

    return (
        <EditTechnicianContext.Provider value={{ handleEditTechnician, initialValue, CreateSchema, technician, show, toast, user, functions }}>
            {children}
        </EditTechnicianContext.Provider>
    )
}

export default EditTechnicianProvider;