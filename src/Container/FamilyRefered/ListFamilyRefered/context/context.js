import { createContext } from "react";

export const ListFamilyReferedContext = createContext({});

const ListFamilyReferedProvider = ({children}) => {
    return(
        <ListFamilyReferedContext.Provider value={{}}>
                {children}
        </ListFamilyReferedContext.Provider>
    )
}

export default ListFamilyReferedProvider;