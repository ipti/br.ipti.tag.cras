import React, { createContext } from "react";
import { CreateServicesState } from "./state";

export const CreateServicesContext = createContext({});

const CreateServicesProvider = ({ children }) => {

    const { initialValue, service, technician, isLoadingService, isLoadingtechnician, handleCreateService, CreateUserSchema } = CreateServicesState()
    
    return (
        <CreateServicesContext.Provider value={{ initialValue, service, technician, isLoadingService, isLoadingtechnician, handleCreateService, CreateUserSchema }}>
            {children}
        </CreateServicesContext.Provider>
    )
}
export default CreateServicesProvider;