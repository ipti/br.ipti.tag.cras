import { createContext } from "react";
import { CreateTechnicianState } from "./state";

export const CreateTechnicianContext = createContext({});

const CreateTechnicianProvider = ({ children }) => {

    const { CreateSchema, handleCreateTechnician, initialValue, user } = CreateTechnicianState();


    return (
        <CreateTechnicianContext.Provider value={{ handleCreateTechnician, initialValue, CreateSchema, user }}>
            {children}
        </CreateTechnicianContext.Provider>
    )
}

export default CreateTechnicianProvider;