import { createContext } from "react";
import { EditServicesState } from "./state";

export const EditServiceContext = createContext({});

const EditServiceProvider = ({children}) => {

    const { Schema, handleCreateService, initialValue, isLoadingService, isLoadingtechnician, service, technician, userIdentify, serviceOne } = EditServicesState();


    return (
        <EditServiceContext.Provider value={{ Schema, handleCreateService, initialValue, isLoadingService, isLoadingtechnician, service, technician, userIdentify, serviceOne }}>
            {children}
        </EditServiceContext.Provider>
    )
}

export default EditServiceProvider;