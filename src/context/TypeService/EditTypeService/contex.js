import { createContext } from "react";
import { EditTypeServiceState } from "./state";

export const EditTypeServiceContext = createContext({});

const EditTypeServiceProvider = ({ children }) => {

    const { CreateSchema, handleEditTypeService, initialValue, typeService, show, toast } = EditTypeServiceState();

    return (
        <EditTypeServiceContext.Provider value={{ handleEditTypeService, initialValue, CreateSchema, typeService, show, toast }}>
            {children}
        </EditTypeServiceContext.Provider>
    )
}

export default EditTypeServiceProvider;