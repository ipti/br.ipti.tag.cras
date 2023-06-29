import { createContext } from "react";

export const ListServicesContext = createContext({});


const ListServicesProvider = ({children}) => {
    return(
        <ListServicesContext.Provider value={{}}>
            {children}
        </ListServicesContext.Provider>
    )
}

export default ListServicesProvider;