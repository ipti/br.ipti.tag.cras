import { createContext } from "react";
import TechnicianVisitsState from "./state";

export const TechnicianVisitsContext = createContext({});

const TechnicianVisitsProvider = ({ children }) => {

    const { CreateTechnicianVisits, technicianVisits } = TechnicianVisitsState();

    return (
        <TechnicianVisitsContext.Provider value={{ CreateTechnicianVisits, technicianVisits }}>
            {children}
        </TechnicianVisitsContext.Provider>
    )
}

export default TechnicianVisitsProvider;