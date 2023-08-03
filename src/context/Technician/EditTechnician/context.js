import { createContext } from "react";
import { EditTechnicianState } from "./state";

export const EditTechnicianContext = createContext({});

const EditTechnicianProvider = ({ children }) => {

    const { CreateSchema, handleCreateTechnician, initialValue } = EditTechnicianState();


    return (
        <EditTechnicianContext.Provider value={{ handleCreateTechnician, initialValue, CreateSchema }}>
            {children}
        </EditTechnicianContext.Provider>
    )
}

export default EditTechnicianProvider;