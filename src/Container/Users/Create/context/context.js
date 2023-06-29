import React, { createContext } from "react";

export const CreateUserContext = createContext({});


const CreateUserProvider = ({children}) => {
    return(
        <CreateUserContext.Provider value={{}}>
            {children}
        </CreateUserContext.Provider>
    )
}

export default CreateUserProvider;