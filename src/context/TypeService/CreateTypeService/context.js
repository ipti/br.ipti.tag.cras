import { createContext } from "react";
import { CreateTypeServiceState } from "./state";

export const CreateTypeServiceContext = createContext({});

const CreateTypeServiceProvider = ({ children }) => {

    const { CreateSchema, handleCreateTypeService, initialValue } = CreateTypeServiceState();

    return (
        <CreateTypeServiceContext.Provider value={{ handleCreateTypeService, initialValue, CreateSchema }}>
            {children}
        </CreateTypeServiceContext.Provider>
    )
}

export default CreateTypeServiceProvider;