import React, { createContext } from "react";
import { CreateServicesState } from "./state";

export const CreateServicesContext = createContext({});

const CreateServicesProvider = ({ children }) => {

    const { initialValue, service, technician, isLoadingService, isLoadingtechnician, handleCreateService, CreateUserSchema, userIdentify, result, CreateAttendanceSchema, handleCreateServiceGroup,CreateNewUserSchema } = CreateServicesState()
    
    return (
        <CreateServicesContext.Provider value={{ initialValue, service, technician, isLoadingService, isLoadingtechnician, handleCreateService, CreateUserSchema, userIdentify, result, CreateAttendanceSchema, handleCreateServiceGroup,CreateNewUserSchema }}>
            {children}
        </CreateServicesContext.Provider>
    )
}
export default CreateServicesProvider;