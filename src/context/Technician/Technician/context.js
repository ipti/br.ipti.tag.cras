import { createContext } from "react";
import { TechnicianState } from "./state";

export const TechnicianContext = createContext({});

const TechnicianProvider = ({children}) => {

    const { error, isLoading, technician, DeleteTechnician } = TechnicianState();
    return (
        <TechnicianContext.Provider value={{ error, isLoading, technician, DeleteTechnician }}>
            {children}
        </TechnicianContext.Provider>
    )
}

export default TechnicianProvider;