import { createContext } from "react";
import { ServiceState } from "./state";

export const ServiceContext = createContext({});

const ServiceProvider = ({children}) => {

    const { error, isLoading, service, deleteService, typeService, technician, serviceGroup } = ServiceState();
    return (
        <ServiceContext.Provider value={{ error, isLoading, service, deleteService, typeService, technician, serviceGroup }}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceProvider;