import { createContext } from "react";
import { CreateTechnicianState } from "./state";

export const CreateTechnicianContext = createContext({});

const CreateTechnicianProvider = ({ children }) => {

    const { CreateSchema, handleCreateTechnician, initialValue } = CreateTechnicianState();


    return (
        <CreateTechnicianContext.Provider value={{ handleCreateTechnician, initialValue, CreateSchema }}>
            {children}
        </CreateTechnicianContext.Provider>
    )
}

export default CreateTechnicianProvider;