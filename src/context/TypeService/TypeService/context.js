import { createContext } from "react";
import { TypeServiceState } from "./state";

export const TypeServiceContext = createContext({});

const TypeServiceProvider = ({children}) => {

    const { error, isLoading, typesServices, DeleteTypeServices } = TypeServiceState();
    return (
        <TypeServiceContext.Provider value={{ error, isLoading, typesServices, DeleteTypeServices }}>
            {children}
        </TypeServiceContext.Provider>
    )
}

export default TypeServiceProvider;