import { createContext } from "react";
import { EditServicesState } from "./state";

export const EditServiceContext = createContext({});

const EditServiceProvider = ({ children }) => {

    const { Schema, handleCreateService, result, initialValue, isLoadingService, isLoadingtechnician, service, technician, userIdentify, serviceOne, toast, show, handleAddFamilyService, handleRemoveFamilyService } = EditServicesState();


    return (
        <EditServiceContext.Provider value={{ Schema, result, handleCreateService, initialValue, isLoadingService, isLoadingtechnician, service, technician, userIdentify, serviceOne, toast, show, handleAddFamilyService, handleRemoveFamilyService }}>
            {children}
        </EditServiceContext.Provider>
    )
}

export default EditServiceProvider;