import { createContext } from "react";
import { TechnicianState } from "./state";

export const TechnicianContext = createContext({});

const TechnicianProvider = ({children}) => {

    const { error, isLoading, technician } = TechnicianState();
    return (
        <TechnicianContext.Provider value={{ error, isLoading, technician }}>
            {children}
        </TechnicianContext.Provider>
    )
}

export default TechnicianProvider;