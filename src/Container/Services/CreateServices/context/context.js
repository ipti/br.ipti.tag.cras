import React, { createContext } from "react";

export const CreateServicesContext = createContext({});

const CreateServicesProvider = ({children}) => {
    return (
        <CreateServicesContext.Provider>
            {children}
        </CreateServicesContext.Provider>
    )
}
export default CreateServicesProvider;