import { createContext } from "react";
import { ServiceState } from "./state";

export const ServiceContext = createContext({});

const ServiceProvider = ({children}) => {

    const { error, isLoading, service, deleteService } = ServiceState();
    return (
        <ServiceContext.Provider value={{ error, isLoading, service, deleteService }}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceProvider;